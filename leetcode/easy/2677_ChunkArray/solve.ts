/**
 * 문제출처: https://leetcode.com/problems/chunk-array/
 * 시작시간: 14:40
 * 종료시간: 15:00
 */

function chunk(arr: number[], size: number): number[][] {
  const answer: number[][] = [];
  let index = 0;

  while (index < arr.length) {
    answer.push(arr.slice(index, index + size));
    index += size;
  }

  return answer;
}
