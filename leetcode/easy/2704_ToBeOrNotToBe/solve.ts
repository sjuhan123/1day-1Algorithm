/**
 * 문제출처: https://leetcode.com/problems/to-be-or-not-to-be/
 * 시작시간: 20:00
 * 종료시간: 20:10
 */

type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
  return {
    toBe: (target) => {
      if (val === target) return true;
      throw "Not Equal";
    },
    notToBe: (target) => {
      if (val !== target) return true;
      throw "Equal";
    },
  };
}
