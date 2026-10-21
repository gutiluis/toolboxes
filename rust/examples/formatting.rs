fn main() {
    // In general, the `{}` will be automatically replaced with any
    // arguments. These will be stringified.
    println!("{} days", 31);
    let name = "goku";
    println!("{}", name);
    println!("execute");

    // positional arguments can be used. specifying an integer inside `{}`
    // determines which aditional argument will be replaced. Arguments start
    // at 0 immediately after the format string.
    println!("{0}, this is {1}. {1}, this is {0}", "Alice", "Bob");
    println!("{0} positional arguments", "test");
    println!(
        "{1}, {0} positional arguments",
        "order", "positional arguments"
    );
    //
    // named arguments. not positional arguments instance
    println!(
        "{subject} {verb} {object}",
        object = "the lazy dog",
        subject = "the quick brown fox",
        verb = "jumps over"
    );

    // different formatting can be invoked by specifying the format character
    // after a `:`
    println!("Base 10:              {}", 69420);
    println!("Base 2 (binary):\t\t{:b}", 69420);
    println!("Base 8 (octal):\t\t{:o}", 69420);
    println!("Base 16 (hexadecimal):\t{:x}\n", 69420);

    // you can right-justify text with a specified width. This will
    // output "    1". (Four white spaces and a "1", for a total width of 5.)
    println!("{number:>5}\n", number = 1);

    // you can pad numbers with extra zeroes
    println!("{number:0>5}", number = 1);

    // and left adjust by flipping the sign. this will output 10000
    println!("{number:0<5}", number = 1);

    // you can use named arguments in the format specifier by appending a `$`
    println!("{number:0>width$}", number = 1, width = 5);

    // rust even checks to make sure the correct number of arguments are used.
    println!("My name is {0}, {1} {0}\n", "Bond", "James");

    // only types that implement fmt::Display can be formatted with `{}`. User
    // defined types do not implement fmt::Display by default
    #[allow(dead_code)] // disable `dead_code` which warn against unused module
    struct Structure(i32);

    // this will not compile because `structure` does not implement
    // fmt::Display
    // println!("This struct `{}` won't print...", Structure(3));
    print_named_arguments();
}

fn print_named_arguments() {
    println!("{name}", name = "goku");
    // error char literal may only contain codepoint
    //println!("{name}", name='some name');
    // print number 2
    println!("{age} years old", age = '2');
    println!("{age} years old", age = 2);
}
