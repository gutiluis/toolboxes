/// Prints a message followed by a newline.
pub fn another_function(message: &str) {
    println!("{message}");
}

pub fn another_function_parameter(x: i32) {
    println!("The value of x is: {x}");
}

/// Prints a message followed by a newline.
pub fn print_with_newline(message: &str) {
    println!("{message}");
}

/// Prints an integer followed by a newline.
pub fn print_integer(amount: &i32) {
    println!("{amount}");
}

/// Prints a message to standard error followed by a newline.
pub fn print_to_stderr_with_newline(message: &str) {
    eprintln!("{message}");
}

/// Prints a message to standard error without a newline.
pub fn print_to_stderr(message: &str) {
    eprint!("{message}");
}
