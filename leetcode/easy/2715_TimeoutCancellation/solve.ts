/**
 * 문제출처: https://leetcode.com/problems/timeout-cancellation/
 * 시작시간: 23:20
 * 종료시간: 23:40
 * 결과: 성공
 */

function cancellable(fn: Function, args: any[], t: number): Function {
  let willFnCall = true;

  setTimeout(() => willFnCall && fn(...args), t);

  return () => (willFnCall = false);
}

/**
 *  const result = []
 *
 *  const fn = (x) => x * 5
 *  const args = [2], t = 20, cancelT = 50
 *
 *  const start = performance.now()
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr))
 *  }
 *
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelT)
 *
 *  setTimeout(() => {
 *     cancel()
 *  }, cancelT)
 *
 *  setTimeout(() => {
 *     console.log(result) // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */
