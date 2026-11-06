#!/usr/bin/env -S npx tsx

import process from "node:process";
import { getUtility } from "./lookup.js";

const name = process.argv[2];

if (!name) {
    process.stderr.write("Usage: tailwind-docs <utility>\n");
    process.exitCode = 1;
} else {
    const documentation = getUtility(name);
    process.stdout.write(JSON.stringify(documentation ?? null));
}
