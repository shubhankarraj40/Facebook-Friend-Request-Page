var a = document.querySelector("h5")
var b = document.querySelector("#add")

let flag = 0;
b.addEventListener("click", function(){
    if(flag == 0){
    a.innerHTML = "Friends!"
    a.style.color = "green"
    b.innerHTML = "Remove Friend"
    flag = 1
    }
    else{
        a.innerHTML = "Stranger!"
         a.style.color = "Red"
b.innerHTML = "Add Friend"
    flag = 0
    }
})

