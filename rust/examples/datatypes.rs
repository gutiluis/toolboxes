#!/usr/bin/env rust-script
// integer is i32

fn main() {
    println!("rust is a statically typed language with 2 data types subsets:\nscalar and compound");

    // regular annotation
    let a_float: f64 = 1.0;
    println!("f64: {}", a_float);
    // suffix annotation
    let an_integer = 5i32;
    println!("i32: {}", an_integer);

    let default_float = 3.0;
    println!("Default float: {}", default_float);
    let default_integer = 7;
    println!("Default integer: {}", default_integer);

    let mut inferred_type: i64 = 12;
    println!("Initial inferred type: {}", inferred_type);
    inferred_type = 432435434454;
    println!("Inferred type: {}", inferred_type);

    let mut mutable = 12;
    println!("Initial mutable value: {}", mutable);

    mutable = 21;
    println!("Mutable integer: {}", mutable);

    let mutable = true;
    println!("Shadowed boolean: {}", mutable);

    let my_array: [i32; 5] = [1, 2, 3, 4, 5];
    println!("Array: {:?}", my_array);

    let my_tuple: (u32, u8, bool, f32) = (5, 1, true, -5.04f32);
    println!("Tuple: {:?}", my_tuple);


    // type annotations
    let guess: u32 = "42".parse().expect("Not a number!");
    println!("{}", guess);

    // boolean type
    let var = true;
    println!("{}", var);

    // variables can be type annotated
    // boolean type with anotation
    let f: bool = false;
    println!("{}", f);

    // numeric operations
    let sum = 5 + 10;
    println!("{}", sum);

    let x = 2.0;
    let y: f32 = 3.0;
    println!("{}, {}", x, y);

}

