#!/usr/bin/env node
import { spawnSync } from "node:child_process";

const minimum = [22, 18, 0];
const actual = process.versions.node.split(".").map(Number);
const supported =
  actual.some(
    (part, index) =>
      part > minimum[index] && actual.slice(0, index).every((value, i) => value === minimum[i]),
  ) || actual.every((part, index) => part === minimum[index]);
console.log(`Node ${process.versions.node} (${supported ? "supported" : "requires 22.18.0+"})`);
for (const command of ["bun", "git"]) {
  const result = spawnSync(command, ["--version"], {
    encoding: "utf8",
    shell: process.platform === "win32",
  });
  console.log(`${command}: ${result.status === 0 ? result.stdout.trim() : "not found"}`);
  if (result.status !== 0) process.exitCode = 1;
}
if (!supported) process.exitCode = 1;
