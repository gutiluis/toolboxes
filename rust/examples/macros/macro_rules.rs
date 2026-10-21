macro_rules! say_hello {
    () => {
        println!("Hello, Rust!");
    };
}

macro_rules! greet {
    ($name:expr) => {
        println!("Hello, {}!", $name);
    };
}


macro_rules! calculate {
    ($a:expr, $b:expr) => {
        $a + $b
    };
    ($a:expr) => {
        $a * 2
    };
}


macro_rules! print_values {
    ($($value:expr),* $(,)?) => {
        $(
            println!("{}", $value);
        )*
    };
}

fn main() {
    say_hello!();

    greet!("Goku");
    greet!("Vegeta");

    println!("{}", calculate!(3, 4));
    println!("{}", calculate!(5));

    print_values!(10, 20, 30);
}
