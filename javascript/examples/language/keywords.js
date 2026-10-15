import {
    JS_RESERVED_KEYWORDS,
    JS_CONTEXTUAL_KEYWORDS,
    JS_SPECIAL_IDENTIFIERS,
    isReservedKeyword,
    isContextualKeyword,
    isSpecialIdentifier
} from "../../src/language/keywords.js";

console.log(isReservedKeyword("class"));       // true
console.log(isContextualKeyword("async"));     // true
console.log(isSpecialIdentifier("undefined")); // true

console.log(isReservedKeyword("hello"));       // false

console.log(JS_RESERVED_KEYWORDS);
