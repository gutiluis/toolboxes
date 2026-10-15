// file: keywords.js
// descr: print reserved keywords, contextual keywords, and identifiers with special meaning using immutable arrays and prints them using template literals.
//
// Object.freeze() prevents modifying the arrays, such as adding or removing elements.
// Reserved keywords: enum is reserved in JavaScript, so including it is correct.
// Contextual keywords: These are context-dependent. For example, async, await, and yield have different restrictions depending on the language context and strictness.
// Special identifiers: Infinity, NaN, and undefined are global properties, not reserved keywords. arguments and eval have special identifier restrictions in certain contexts.

export const JS_RESERVED_KEYWORDS = Object.freeze([
    "break", "case", "catch", "class", "const", "continue",
    "debugger", "default", "delete", "do", "else", "export",
    "extends", "finally", "for", "function", "if", "import",
    "in", "instanceof", "new", "return", "super", "switch",
    "this", "throw", "try", "typeof", "var", "void", "while",
    "with", "enum"
]);

export const JS_CONTEXTUAL_KEYWORDS = Object.freeze([
    "as", "async", "await", "from", "get", "let", "of",
    "set", "static", "target", "using", "yield"
]);

export const JS_SPECIAL_IDENTIFIERS = Object.freeze([
    "arguments", "eval", "Infinity", "NaN", "undefined"
]);

export function isReservedKeyword(value) {
    return JS_RESERVED_KEYWORDS.includes(value);
}

export function isContextualKeyword(value) {
    return JS_CONTEXTUAL_KEYWORDS.includes(value);
}

export function isSpecialIdentifier(value) {
    return JS_SPECIAL_IDENTIFIERS.includes(value);
}

