/**
 * 문제출처: https://leetcode.com/problems/debounce/
 * 시작시간: 13:00
 * 종료시간: 13:30
 */

type F = (...p: any[]) => any;

const debounce = (fn: F, t: number): F => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), t);
  };
};
