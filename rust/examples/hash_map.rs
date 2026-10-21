// import hashmap from the collections module
// HashMap::new() create empty hash map
// let mut scores makes the variable mutable so you can insert entries
// String::from("Blue") creates an owned String double quotes.
// scores.insert(..., 10) inserts the key "Blue" with the value 10
use std::collections::HashMap;
fn main() {
    let mut scores = HashMap::new();
    scores.insert(String::from("Blue"), 10);
}
