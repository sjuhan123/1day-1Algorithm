// 머쓱이는 프로그래머스에 로그인하려고 합니다. 
// 머쓱이가 입력한 아이디와 패스워드가 담긴 배열 id_pw와 회원들의 정보가 담긴 2차원 배열 db가 주어질 때, 
// 다음과 같이 로그인 성공, 실패에 따른 메시지를 return하도록 solution 함수를 완성해주세요.

// 아이디와 비밀번호가 모두 일치하는 회원정보가 있으면 "login"을 return합니다.
// 로그인이 실패했을 때 아이디가 일치하는 회원이 없다면 “fail”를, 
// 아이디는 일치하지만 비밀번호가 일치하는 회원이 없다면 “wrong pw”를 return 합니다.

// 제한사항
// 회원들의 아이디는 문자열입니다.
// 회원들의 아이디는 알파벳 소문자와 숫자로만 이루어져 있습니다.
// 회원들의 패스워드는 숫자로 구성된 문자열입니다.
// 회원들의 비밀번호는 같을 수 있지만 아이디는 같을 수 없습니다.
// id_pw의 길이는 2입니다.
// id_pw와 db의 원소는 [아이디, 패스워드] 형태입니다.
// 1 ≤ 아이디의 길이 ≤ 15
// 1 ≤ 비밀번호의 길이 ≤ 6
// 1 ≤ db의 길이 ≤ 10
// db의 원소의 길이는 2입니다.

/*
id_pw 
  - 각각의 요소를 하나씩 꺼낸다.
  - id = id[0]
  - pw = pw[1]
  - 제한사항에 맞게 에러 출력?

db
  - id, pw 각각 map 으로 split 해서 list 변수화
  - 입력-id db-id 동일하면
    - 입력-pw db-pw 동일하면 login
    - 입력-pw db-pw 동일하지 않으면 wrong fail
  - 일치하는 id가 없다면 fail
*/

function solution(id_pw, db){
  
  let id = id_pw[0];
  let pw = id_pw[1];

  let db_idList = db.map((element) => element[0].split(""));
  let db_pwList = db.map((element) => element[1].split(""));

  for(let i = 0; i < db.length; i++){
    const db_id = db_idList[i].join("");
    const db_pw = db_pwList[i].join("");
    if(id === db_id){
      if(pw === db_pw){
        return `login`;
      }
      return `wrong pw`;
    }
  }
  return `fail`;
}

console.log(solution(["meosseugi", "123"],	[["rardss", "123"], ["yyoom", "1234"], ["meosseugi", "1234"]]));
console.log(solution(["programmer02", "15789"],	[["programmer02", "111111"], ["programmer00", "134"], ["programmer01", "1145"]]));
console.log(solution(["rabbit04", "98761"],	[["jaja11", "98761"], ["krong0313", "29440"], ["rabbit00", "111333"]]));