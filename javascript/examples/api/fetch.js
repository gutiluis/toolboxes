import { getJson } from "../../src/api/fetch.js";

const users = await getJson(
    "https://jsonplaceholder.typicode.com/users",
);

console.log(users);
