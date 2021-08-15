var id = document.getElementById("userID");

console.log(id);

function sendRequest() {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function () {
    if (
      httpRequest.readyState == XMLHttpRequest.DONE &&
      httpRequest.status == 200
    ) {
      document.getElementById("text").innerHTML = httpRequest.responseText;
    }
  };
  // POST 방식의 요청은 데이터를 Http 헤더에 포함시켜 전송함.
  httpRequest.open(
    "POST",
    `http://115.85.181.34:8081/api/user/login?userPhoneNum=1&userPw=1234`,
    true
  );
  httpRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded"
  );
  httpRequest.send(
    "creationTime=11:11:11&id=minjae12&lastAccessedTime=22:22:22"
  );
}
