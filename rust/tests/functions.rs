use toolbox::functions;
use toolbox::functions::data_types;

#[test]
fn calls_another_function() {
    functions::output::another_function("Hello, world!");
}

#[test]
fn calls_another_function_parameter() {
    functions::output::another_function_parameter(42);
}

#[test]
fn test_print_with_newline() {
    functions::output::print_with_newline("Hello, Rust!");
}

#[test]
fn test_print_integer() {
    functions::output::print_integer(&42);
}

#[test]
fn test_write_format_string() {
    let result = functions::formatting::write_format_string("Hello, Rust!");
    assert_eq!(result, "Hello, Rust!");
}

#[test]
fn test_print_to_stderr_with_newline() {
    functions::output::print_to_stderr_with_newline("Error message");
}

#[test]
fn test_print_to_stderr() {
    functions::output::print_to_stderr("[error]");
}
/// borrowing
#[test]
fn test_print_number_bases() {
    functions::formatting::print_number_bases(&33);
}

#[test]
fn test_numbers() {
    assert_eq!(data_types::numbers(42), 42);
}

#[test]
fn test_booleans() {
    assert!(data_types::booleans(true));
    assert!(!data_types::booleans(false));
}

#[test]
fn test_tuples() {
    assert_eq!(data_types::tuple(10), (10,));
}
