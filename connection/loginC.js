// function logging(){
//   let st_name = document.getElementById('st_name').value
//   let st_id = document.getElementById('st_id').value
//   let department = document.getElementById('department').value
//   console.log(`이름 ${st_name} 아이디 ${st_id} 학과 ${department}`)
// }

function sendRequest() {
  let userID = document.getElementById("userID").value;
  let userPW = document.getElementById("userPW").value;
  console.log(`아이디 ${userID} 비밀번호 ${userPW}`);

  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function () {
    if (
      httpRequest.readyState == XMLHttpRequest.DONE &&
      httpRequest.status == 200
    ) {
      console.log(httpRequest.status);
    }
  };
  // POST 방식의 요청은 데이터를 Http 헤더에 포함시켜 전송함.
  httpRequest.open(
    "POST",
    `http://115.85.181.34:8081/api/user/login?userPhoneNum=${userID}&userPw=${userPW}`,
    true
  );
  if (httpRequest.status == 200) {
    // location.href = "./MBTI/SignUp2.html";
    alert("와 화장실가야징");
  } else {
    alert("아이고.." + httpRequest.status);
  }

  httpRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded"
  );
  httpRequest.send("");
}
