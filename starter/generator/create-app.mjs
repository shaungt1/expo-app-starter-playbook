#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { applyPlan } from './project-config.mjs';

const generatorDir = path.dirname(fileURLToPath(import.meta.url));
const starterDir = path.dirname(generatorDir);
const templateDir = path.join(starterDir, 'template');
const args = process.argv.slice(2);
const targetArg = args[0];
const planIndex = args.indexOf('--plan');
const install = args.includes('--install');

if (!targetArg || planIndex < 0 || !args[planIndex + 1]) {
  console.error('Usage: node starter/generator/create-app.mjs TARGET --plan PLAN.json [--install]');
  process.exit(2);
}

const target = path.resolve(targetArg);
const planFile = path.resolve(args[planIndex + 1]);
if (fs.existsSync(target) && fs.readdirSync(target).length > 0) {
  throw new Error(`Target must be new or empty: ${target}`);
}

fs.mkdirSync(target, { recursive: true });
fs.cpSync(templateDir, target, {
  recursive: true,
  filter(source) {
    const relative = path.relative(templateDir, source);
    return !relative.split(path.sep).some((part) => part === 'node_modules' || part === '.git' || part === '.expo');
  },
});
const plan = applyPlan(target, JSON.parse(fs.readFileSync(planFile, 'utf8')));
const gitInit = spawnSync('git', ['init', '-b', 'main'], {
  cwd: target,
  encoding: 'utf8',
  shell: process.platform === 'win32',
});
if (gitInit.status !== 0) {
  throw new Error(`Unable to initialize the generated app's Git repository: ${gitInit.stderr}`);
}
fs.writeFileSync(path.join(target, 'SOURCE.md'), [
  '# Template source',
  '',
  'Generated from the owned template in expo-app-starter-playbook.',
  'Originally derived from https://github.com/Simonstorms/expo-app-template.git',
  'Pinned source commit: 888b9e131bdab4354c2bff7ea1fb744667269b10',
  'The upstream MIT license is preserved in LICENSE.',
  '',
].join('\n'));

console.log(`Created ${plan.name} at ${target}`);
console.log(`Selected capabilities: ${plan.capabilities.join(', ')}`);
if (install) {
  const windowsGitBash = 'C:\\Program Files\\Git\\bin\\bash.exe';
  const bash = process.platform === 'win32' && fs.existsSync(windowsGitBash) ? windowsGitBash : 'bash';
  const result = spawnSync(bash, ['scripts/setup.sh'], { cwd: target, stdio: 'inherit', shell: false });
  if (result.status !== 0) process.exit(result.status ?? 1);
} else {
  console.log(`Next: cd "${target}" && bash scripts/setup.sh`);
}
