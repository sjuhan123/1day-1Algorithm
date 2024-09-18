const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = parseInt(input[0]);
let sum = 0;
let num = input[1].split("").map(Number);

for (let i = 0; i < n; i++) {
    sum += num[i];
}

console.log(sum);