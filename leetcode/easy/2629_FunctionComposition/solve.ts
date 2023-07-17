/**
 * 문제출처: https://leetcode.com/problems/functional-composition/
 * 시작시간: 09:40
 * 종료시간: 10:00
 */

type F = (x: number) => number;

function compose(functions: F[]): F {
	return function(x) {
      return functions.reduceRight((acc, cur) => {
        return cur(acc);
      }, x);
    }
};

const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(4));