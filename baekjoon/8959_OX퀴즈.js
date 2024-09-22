const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split("\n").slice(1);

let result = 0;
let currentSum = 0;

input.forEach((quizString) => {
    for(let quizResult of quizString) {
        /**
         * O를 만나면,
         * 1. currentSum = currentSum + 1
         * 2. result = result + currentSum
         */
        if(quizResult === 'O'){
            currentSum += 1;
            result += currentSum;
        }
        /**
         * X를 만나면,
         * currentSum = 0
         */
        if(quizResult === 'X'){
            currentSum = 0;
        }
    }
    console.log(result);
    result = 0;
    currentSum = 0;
})

