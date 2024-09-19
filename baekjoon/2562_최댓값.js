const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split("\n").map(x => Number(x));

let max = input[0];
let count = 0;

for(let i = 0; i < input.length; i++) {
    if(input[i] > max) {
        max = input[i];
        count = i;
    }
}

console.log(max)
console.log(count + 1);

