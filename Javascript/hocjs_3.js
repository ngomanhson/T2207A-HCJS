function demo(){
    var h = document.getElementById("head");
    h.style.color = "red";
}
function demo_1(){
    var h = document.getElementById("head");
    h.style.color = "green";
}

function change(){
    var ip = document.getElementById("ip");
    console.log(ip.value);
}
function changecolor(){
    // var arr = document.getElementsByTagName("p");   //array
    // var arr = document.getElementsByClassName("p");
    var arr = document.querySelectorAll("p.pg");
    for(var i=0;i<arr.length;i++){
        arr[i].style.color= "deeppink";
    }
}