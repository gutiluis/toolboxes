import assert from "node:assert/strict";
import test from "node:test";
import { getCwd } from "../../src/filesystem/cwd.js";

test("getCwd returns the current working directory", () => {
    assert.equal(getCwd(), process.cwd());
});
