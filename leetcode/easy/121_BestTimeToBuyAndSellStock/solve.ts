/**
 * 문제출처: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * 시작시간: 22:10
 * 종료시간: 22:50
 * 첫 번째 풀이: 실패
 */

 function maxProfit(prices: number[]): number {
  let profit = 0;

  prices.forEach((price, buyPriceIndex) => {
    const sellPrices = prices.slice(buyPriceIndex + 1);
    sellPrices.forEach((sellPrice) => {
      if(sellPrice - price > profit){
        profit = sellPrice - price;
      }
    })
  })

  return profit < 0 ? 0 : profit;
};

console.log(maxProfit([7,1,5,3,6,4])); // 5
console.log(maxProfit([7,6,4,3,1])); // 0