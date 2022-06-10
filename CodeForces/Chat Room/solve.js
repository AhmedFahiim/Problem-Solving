let string =
  "helllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllo";

let arr = string.split("").sort().join("");
if (
  arr.includes("h") &&
  arr.includes("e") &&
  arr.includes("ll") &&
  arr.includes("o") &&
  arr.length > 5
) {
  console.log("i mean hello");
} else console.log("i don't mean hello");
