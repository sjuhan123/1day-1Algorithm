/**
 * 문제출처: https://leetcode.com/problems/counter-ii/
 * 시작시간: 09:40
 * 종료시간: 10:00
 */

type ReturnObj = {
  increment: () => number,
  decrement: () => number,
  reset: () => number,
}

function createCounter3(init: number): ReturnObj {
  let count = init;
  return {
      increment: () => { 
          count += 1;
          return count;
      },
      decrement: () => { 
          count -= 1;
          return count;
      },
      reset: () => { 
          count = init;
          return init;
      },
  }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */