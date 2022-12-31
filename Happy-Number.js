/* 15:10분 시작 16:40분 종료 */
/* while문 False 조건 하드코딩으로 풀어서 다시 생각해볼 필요가 있어보인다. */
/*
ex, n = 2
2^2 = 4

--- 루프 시작 전
4^2 = 16
1 + 36 = 37
9 + 49 = 58
25 + 64 = 89
64 + 81 = 145
1 + 16 + 25 = 42
16 + 4 = 20
4 + 0 = 4
4^2 = 16

ex, n = 7
49
16 + 81 = 97
81 + 49 = 130
1+ 9 + 0 = 10
1 + 0 = 1
*/

var isHappy = function(n) {
  if(n === 1) return true;

  var numberToArray = n.toString().split("");

  while(true){
    var squreElements = numberToArray.map((element) => Math.pow(element, 2));
    var sumElements = squreElements.reduce((ac,cv) => ac + cv, 0);

    if(sumElements === 1){
      return true;
    } else if (sumElements > 1 && sumElements < 10 && sumElements != 7 ) {
      return false;
    } else {
      var convertSunElementsToArray = sumElements.toString().split("");
      numberToArray = convertSunElementsToArray;
    }
  }
};

console.log(isHappy(2));        // false
console.log(isHappy(7));        // true
console.log(isHappy('19'));     // true