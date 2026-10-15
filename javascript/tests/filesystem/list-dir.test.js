import assert from "node:assert/strict";
import test from "node:test";
import { listDir } from "../../src/filesystem/list-dir.js";

test("listDir returns an array containing the current directory entries", () => {
    const entries = listDir();

    assert.ok(Array.isArray(entries));
    assert.ok(entries.every((entry) => typeof entry === "string"));
});
