// ownership.rs
// borrowing - immutable vs mutable reference
// reference is borrowing in rust

struct User {
    name: String,
}

impl User {
    fn new(name: String) -> Self {
        Self { name }
    }
}

fn main() {
    let user1 = User::new("Alice".to_owned());
    let mut user2 = user1;
    print_name(&user2);
    update_name(&mut user2, "Abby".to_owned());
    print_name(&user2);
}

// is taking an immutable borrow
fn print_name(user: &User) {
    println!("{}", user.name);
}

fn update_name(user: &mut User, name: String) {
    user.name = name;
}
