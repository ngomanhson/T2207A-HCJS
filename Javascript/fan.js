//Cong tac 1
var f =25;
function canhquat_1() {
    var x = document.getElementById("abc");
    x.style.transform = 'rotate('+f+'deg)';
    f += 2;
}
function quay_1(){
    setInterval(canhquat_1,10);
}

//Cong tac 2
function canhquat_2() {
    var x = document.getElementById("abc");
    x.style.transform = 'rotate('+f+'deg)';
    f += 6;
}
function quay_2(){
    setInterval(canhquat_2,10);
}

//Cong tac 3
function canhquat_3() {
    var x = document.getElementById("abc");
    x.style.transform = 'rotate('+f+'deg)';
    f += 15;
}
function quay_3(){
    setInterval(canhquat_3,10);
}

//Cong tac off
function off(){

}