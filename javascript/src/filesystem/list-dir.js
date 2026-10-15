import { readdirSync } from "node:fs";

export function listDir() {
    return readdirSync(process.cwd());
}
