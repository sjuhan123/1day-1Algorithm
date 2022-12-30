/* 시작 시간: 16:40 종료시간: 17:38*/
/*
rowindex = 0 output = [1]
rowindex = 1 output = [1, 1]
rowindex = 2 output = [1, 2, 1]
rowindex = 3 output = [1, 3, 3, 1]
rowindex = 4 output = [1, 4, 6, 4, 1]
rowindex = 5 output = [1, 5, 10, 10, 5, 1]

outputArrayLength = rowindex + 1
0 index = 1
마지막 index[rowindex] = 1 
*/

var getRow = function(rowIndex) {
  if(rowIndex === 0) return [1];
  function lowerThanFour(rowIndex){
    const answer = [];
    answer.push(1);
    for(let i = 0; i < rowIndex - 1; i++){
      answer.push(rowIndex);
    }
    answer.push(1);
    return answer;
  }
  if(rowIndex < 4){
    return lowerThanFour(rowIndex);
  } else {
    var indexInArray = [];
    indexInArray.push(lowerThanFour(3));
    for(let i = 4; i <= rowIndex; i++){
      moreThanFour(i);
    }
    return indexInArray[rowIndex -3];
  }

  function moreThanFour (rowIndex) {
    var previosIndex = indexInArray[rowIndex - 4];
    const array = [];
    array.push(1);
    for(let i = 0; i < rowIndex - 1; i++){
      array.push(previosIndex[i] + previosIndex[i + 1]);
    }
    array.push(1);
    indexInArray.push(array);
  }
};