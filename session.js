function u(){
    let uname = sessionStorage.getItem("userName")
    return uname
}

let i = 0

function modify(MBTI, NICKNAME, KEYWORD, PERCENT){
    let kword = KEYWORD.split(' ')
    console.log(kword)
    document.getElementsByClassName('MBTI')[i].textContent = MBTI
    document.getElementsByClassName('NICKNAME')[i].textContent = NICKNAME
    for(let j = 0; j < 3; j++){
        document.getElementsByClassName(`KEYWORD${i + 1}`)[j].textContent = kword[j]
    }
    document.getElementsByClassName('percent')[i].textContent = PERCENT + "%"
    document.getElementsByClassName('blueBar')[i].style.width = `${PERCENT*320/100}px`;
    i++
}

$.ajax({
    type: "GET",
    url: `http://115.85.181.34:8081/api/user/lovebymbti?session=${u()}`,
    data:{},
    success: function(response){
        for(let i = 0; i < 3; i++){
            modify(response[i].mbti, response[i].userName, response[i].keyword, response[i].persent)
        }
    }
})

function nextPage0(){
    let UNAME = document.getElementsByClassName('NICKNAME')[0].innerHTML
    sessionStorage.setItem("UNAME",UNAME)
}
function nextPage1(){
    let UNAME = document.getElementsByClassName('NICKNAME')[1].innerHTML
    sessionStorage.setItem("UNAME",UNAME)
}
function nextPage2(){
    let UNAME = document.getElementsByClassName('NICKNAME')[2].innerHTML
    sessionStorage.setItem("UNAME",UNAME)
}