/**
 * 문제출처: https://leetcode.com/problems/array-reduce-transformation/
 * 시작시간: 11:00
 * 종료시간: 11:10
 */

type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
  if(!nums.length) return init;

  let acc = init;
  nums.forEach(num => {
    acc = fn(acc, num);
  });
  return acc;
};

console.log(reduce([1,2,3,4], function sum(accum, curr) { return accum + curr; }, 0)); // 10
console.log(reduce([1,2,3,4], function sum(accum, curr) { return accum + curr * curr; }, 100)); // 100
console.log(reduce([], function sum(accum, curr) { return 0; }, 25)); // 25