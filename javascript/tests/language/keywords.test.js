import test from "node:test";
import assert from "node:assert/strict";

import {
    JS_RESERVED_KEYWORDS,
    JS_CONTEXTUAL_KEYWORDS,
    JS_SPECIAL_IDENTIFIERS,
    isReservedKeyword,
    isContextualKeyword,
    isSpecialIdentifier
} from "../../src/language/keywords.js";

test("reserved keywords", () => {
    assert.ok(isReservedKeyword("const"));
    assert.ok(isReservedKeyword("return"));
    assert.ok(isReservedKeyword("enum"));

    assert.equal(isReservedKeyword("hello"), false);
    assert.equal(isReservedKeyword("Const"), false);
});

test("contextual keywords", () => {
    assert.ok(isContextualKeyword("async"));
    assert.ok(isContextualKeyword("await"));
    assert.ok(isContextualKeyword("yield"));

    assert.equal(isContextualKeyword("hello"), false);
    assert.equal(isContextualKeyword("const"), false);
});

test("special identifiers", () => {
    assert.ok(isSpecialIdentifier("undefined"));
    assert.ok(isSpecialIdentifier("NaN"));
    assert.ok(isSpecialIdentifier("arguments"));

    assert.equal(isSpecialIdentifier("hello"), false);
    assert.equal(isSpecialIdentifier("const"), false);
});

test("keyword lists are frozen", () => {
    assert.ok(Object.isFrozen(JS_RESERVED_KEYWORDS));
    assert.ok(Object.isFrozen(JS_CONTEXTUAL_KEYWORDS));
    assert.ok(Object.isFrozen(JS_SPECIAL_IDENTIFIERS));
});

test("keyword lists contain no duplicates", () => {
    for (const keywords of [
        JS_RESERVED_KEYWORDS,
        JS_CONTEXTUAL_KEYWORDS,
        JS_SPECIAL_IDENTIFIERS
    ]) {
        assert.equal(
            new Set(keywords).size,
            keywords.length
        );
    }
});

test("keyword checks reject non-string values", () => {
    for (const value of [undefined, null, 123, {}, []]) {
        assert.equal(isReservedKeyword(value), false);
        assert.equal(isContextualKeyword(value), false);
        assert.equal(isSpecialIdentifier(value), false);
    }
});
