/**
 * 문제출처: https://leetcode.com/problems/counter/
 * 시작시간: 10:30
 * 종료시간: 10:40
 */

// 첫 번째 풀이: 통과
function createCounter(n: number): () => number {
  let count = n - 1;
  return function() {
    count = count + 1;
    return count;
  }
}

// 두 번째 풀이: 통과
function createCounter2(n: number): () => number {
  return function() {
    return n++;
  }
}

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */