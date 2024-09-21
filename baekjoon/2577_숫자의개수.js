const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split("\n").map(e => Number(e));

const multiplied = input.reduce((acc, el) => {
    return acc * el;
}, 1).toString().split("");

for(let i = 0; i <= 9; i ++) {
    const targetNumber = String(i);
    const total = multiplied.filter((el) => el === targetNumber).length;
    console.log(total);
}


