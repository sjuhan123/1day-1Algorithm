/* 15:10 시작, 16:10 1시간 경과했지만 구현 실패.
1. map을 이용해 score 2차원 배열의 요소에 각각 접근해서, 점수의 평균을 구해 배열 반환
2. Math.max(...studentsAverage)를 이용해 max값 찾기. 해당 index 찾기
3. max 값 찾고 slice? splice?
*/

function solution(score) {
  const array = [];
  for(let i = 0; i < score.length; i++){
    array.push(" ");
  }

  var averageScoresInArray = score.map(element => (element[0] + element[1]) / 2);
  const maxScoresInArray = [];

  for(let i = 1; i <= score.length; i++){
    var maxScore = Math.max(...averageScoresInArray);
    maxScoresInArray.push(maxScore);
    var indexOfMaxScore = averageScoresInArray.indexOf(maxScore);
    
    averageScoresInArray.splice(indexOfMaxScore, 1);
    if(maxScoresInArray.includes(maxScore)){
      array.splice(indexOfMaxScore, 1, array[array.indexOf(maxScore)]);
    }
    array.splice(indexOfMaxScore, 1, i);
  }
  return array;
}

console.log(solution([[80, 70], [70, 80], [30, 50], [90, 100], [100, 90], [100, 100], [10, 30]]));