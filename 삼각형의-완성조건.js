/*
나머지 한변이 될 수 있는 정수는 
1. 두 변 중에 한 변이 제일 길 때, 나머지 한변은
두 변의 차이보다 크거나 제일 긴 변보다 작거나 같아야 되고,
2. 나머지 한 변이 제일 길 때는, 두 변 보다 길거나 두 변의 합보다 작아야 된다.
*/

function solution(sides){
  var answer = 0;
  var minus = Math.abs(sides[0] - sides[1]);
  
  for(let i = minus + 1; i <= Math.max(...sides); i++){
    answer += 1;
  }

  var plus = sides.reduce((accumulater, currentValue) => accumulater + currentValue, 0);

  for(let i = Math.max(...sides) + 1; i < plus; i++){
    answer += 1;
  }
  return answer;
}

console.log(solution([1,2])); // 1
console.log(solution([3,6])); // 5
console.log(solution([11,7])); // 13