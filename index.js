import { numbers } from "./numbers.js";
const concat = (nums, strs) => [...nums, ...strs];
const result = concat(numbers, ["a", "b", "c"]);
console.log("ℹ  ~ result:", result);
