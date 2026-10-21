/// declare first, assign later
fn someotherfunction() {
    let declarevariablebinding;
    {
        let declarevariable = "some string";
        declarevariablebinding = declarevariable;
    }

    println!("{declarevariablebinding}");
}

fn main() {
    someotherfunction();
    // Declare a binding, then initialize it.
    let a_binding;
    {
        let x = 2;
        a_binding = x * x;
    }
    println!("a binding: {a_binding}");

    let another_binding;
    another_binding = 1;
    println!("another binding: {another_binding}");

    // Assign a value to a binding declared outside the inner scope.
    let declarevariablebinding;
    {
        let declarevariable = "some string";
        declarevariablebinding = declarevariable;
    }
    println!("{declarevariablebinding}");

    // Declare a variable with an explicit type, then assign it.
    let c: i32;
    c = 911;
    println!("the format output is: {c}");

    // Shadowing: the second binding shadows the first.
    let xx: i32 = 909090;
    println!("first binding: {xx}");
    let xx = 333;
    println!("shadowed binding: {xx}");

    // Shadowing an initialized binding with an uninitialized one.
    let cc: i32 = 3233;
    print!("{cc}");
    let cc: i32;
    cc = 200;
    print!("{cc}");
}
