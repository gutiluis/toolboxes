function displayProducts(products) {
    for (const product of products) {
        console.log(product);
    }
}

// index
function displayIndexProducts(products) {
    products.forEach((product, index) => {
        console.log(`${index}: ${product}`);
    });
}

// array destructuring
// process.argv is a node property that returns an array containing the CLI arguments used to start the process
// slice(0) is node executable path
// slice(2) creates a new array string at index 2, excluding the first 2 elements
// method is the first element of the array returned by slice(2)
const [method, ...products] = process.argv.slice(2);

switch (method) {
    case "for-of":
        displayProducts(products);
        break;

    case "forEach":
        displayIndexProducts(products);
        break;

    default:
        console.log(
            "Usage: node array-iteration.js <for-of|forEach> <products...>",
        );
}
