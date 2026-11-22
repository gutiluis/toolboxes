export const C_KEYWORD_DOCUMENTATION = {
    char: {
        category: "C data type",
        description:
            "Declares an integer type used to represent character values and small integers.",
        syntax: [
            "char character;",
            "char character = 'A';",
            'char string[] = "Hello";',
            "signed char value;",
            "unsigned char value;",
        ],
        returns: "Not applicable. char is a data type, not a function.",
        examples: [
            "char letter = 'A';",
            'char name[] = "Alice";',
            "unsigned char byte = 255;",
            'printf("%c\\n", letter);',
        ],
        notes: [
            "sizeof(char) is always 1 byte in C.",
            "A byte is defined as the size of a char; it is not necessarily 8 bits.",
            "Plain char may be signed or unsigned depending on the implementation.",
            "signed char represents negative and positive values.",
            "unsigned char represents non-negative values.",
            "Character constants such as 'A' have type int in C.",
            "A string literal is an array of char elements terminated by a null character.",
        ],
        seeAlso: ["signed", "unsigned", "int", "sizeof"],
    },
};
