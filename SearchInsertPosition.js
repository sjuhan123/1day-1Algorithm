/* 09:00 시작 09:35 끝 */
/*
제한조건 0(log n) runtime complexity

1. include 사용해서 target이 nums 배열 안에 있는지 판별
2. findIndex 사용
*/

// 처음 시도한 코드
// var searchInsert = function(nums, target) {
//   if(nums.includes(target)){
//     return nums.findIndex((element) => element === target);
//   } else if (nums.includes(target + 1)) {
//     return nums.findIndex((element) => element === target + 1);
//   } else if (nums.includes(target - 1)) {
//     return nums.findIndex((element) => element === target - 1) + 1;
//   } else if (nums[nums.length - 1] < target) {
//     return nums.length - 1 + (target - nums[nums.length - 1] - 1);
//   } else {
//     return 0;
//   }
// };

// 수정한 코드
var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
};

console.log(searchInsert([1,3,5,6], 5));    // 2
console.log(searchInsert([1,3,5,6], 2));    // 1
console.log(searchInsert([1,3,5,6], 7));    // 4
