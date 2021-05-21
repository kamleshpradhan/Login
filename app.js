const button = document.querySelector("button");
const username = document.querySelector(".name")
const password = document.querySelector(".pass")
const body = document.querySelector(".body")
const name1 = "jack"
const pass = "12345"

button.addEventListener("click",function(){
    if(username.value===name1&&password.value===pass){
        body.classList.toggle("a");
        button.classList.toggle("b1")
    }else{
        body.classList.toggle("r");
        button.classList.toggle("b2")
    }
})