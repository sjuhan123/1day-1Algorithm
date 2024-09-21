const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

let count = 0;

for (let i = 0; i < 7; i++){
    if (input[i] < input[i+1]) {
        count++;
    }
}

const result = {
    0: 'descending',
    7: 'ascending',
}[count];

console.log(result || 'mixed');