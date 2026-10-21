/// Formats a message into a String.
pub fn write_format_string(message: &str) -> String {
    format!("{message}")
}

/// Prints a number in decimal, binary, octal, and hexadecimal.
pub fn print_number_bases(number: &i32) {
    println!("Base 10:\t\t\t{number}");
    println!("Base 2 (binary):\t\t{number:b}");
    println!("Base 8 (octal):\t\t{number:o}");
    println!("Base 16 (hexadecimal):\t{number:x}");
}
