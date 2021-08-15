function sendRequest() {
    let userNAME = document.getElementById('userNAME').value
    let userSID = document.getElementById('userSID').value
    let userSPW = document.getElementById('userSPW').value
    let userKEYWORD = document.getElementById('userKEYWORD').value
    let userTEXT = document.getElementById('userTEXT').value
    let userMBTI = document.getElementById('MBTI').innerText

    console.log(`닉네임 ${userNAME} 아이디 ${userSID} 비밀번호 ${userSPW} 
    키워드 ${userKEYWORD} 텍스트 ${userTEXT} 엠비티아이 ${userMBTI}`)
  
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
      if (
        httpRequest.readyState == XMLHttpRequest.DONE &&
        httpRequest.status == 200
      ) {
        // document.getElementById("text").innerHTML = httpRequest.responseText;
      }
    };
    // POST 방식의 요청은 데이터를 Http 헤더에 포함시켜 전송함.
    httpRequest.open(
      "POST",
      `http://115.85.181.34:8081/api/user/register?userName=${userNAME}&userPhoneNum=${userSID}&userPw=${userSPW}
      &keyword=${userKEYWORD}&introduce=${userTEXT}&mbti=${userMBTI}`,
      true
    );
    httpRequest.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded"
    );
    httpRequest.send();
  }