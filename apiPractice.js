function nameReturn(){
    return sessionStorage.getItem('UNAME')
}

function modify(NICKNAME, KEYWORD, INTRODUCE, MBTI){
    document.getElementById('nickname').textContent = NICKNAME
    document.getElementById('keyword').textContent = KEYWORD
    document.getElementById('introduce').textContent = INTRODUCE
    document.getElementById('mbti').textContent = MBTI
    sessionStorage.removeItem('UNAME')
}

$.ajax({
    type: "GET",
    url: `http://115.85.181.34:8081/api/user/profile/{name}?name=${nameReturn()}`,
    data: {},
    success: function(response){
        // console.log(`이름 : ${response.userName}\n키워드 : ${response.keyword}\n소개 : ${response.introduce} `)
        modify(response.userName, response.keyword, response.introduce, response.mbti)
    }
})