// collection type. not the same as vector...

fn main() {
    // print [3, 3, 3, 3, 3]
    let a = [3; 5];
    println!("{:?}", a);
    // print string, string, string inside the array
    let b = ["string"; 3];
    println!("{:?}", b);

    let a = [1, 2, 3, 4];
    println!("First: {}", a[0]);
    println!("Second: {}", a[1]);

    // array type with type of each element and the number of elements in the array
    // i32 is the type of each element
    let a: [i32; 5] = [1, 2, 3, 4, 5];
    println!("{:?}", a);

    let first = a[0];
    let second = a[1];

    println!("First: {first}");
    println!("Second: {second}");
}
