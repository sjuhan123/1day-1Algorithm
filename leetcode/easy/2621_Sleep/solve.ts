/**
 * 문제출처: https://leetcode.com/problems/sleep/
 * 시작시간: 09:00
 * 종료시간: 09:15
 */

async function sleep(millis: number): Promise<void> {
  return new Promise((resolve, _) => setTimeout(() => {
resolve()}, millis));
}