/**
 * 문제출처: https://leetcode.com/problems/is-object-empty/
 * 시작시간: 09:30
 * 종료시간: 09:35
 * 조건: 시간복잡도 O(1)
 */

function isEmpty(obj: Record<string, any> | any[]): boolean {
  return JSON.stringify(obj).length === 2;
};
