/**
 * 문제출처: https://leetcode.com/problems/filter-elements-from-array/
 * 시작시간: 11:00
 * 종료시간: 11:10
 */

function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
  const result:number[] = [];
  arr.forEach((number, index) => {
    if(fn(number, index)){
      result.push(number);
    }
  });
  return result;
};