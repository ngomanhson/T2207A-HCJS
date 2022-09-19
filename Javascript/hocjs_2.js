var obj ={
    name: 'Ngô Mạnh Sơn',
    age: 17,
    mark: 6,
    girlFriends: ['Nguyễn Thúy Kiều','Nguyễn Thúy Vân'],
    eat: function (){
        console.log(this.name+"đang học");
    }
};
console.log(obj.name);
obj.eat();
obj.name= 'Ngô Trung Hải';
console.log(obj.name);
for(var i=0;i< obj.girlFriends.length;i++){
    console.log(obj.girlFriends[i])
}
obj.eat();

var f =25;
function demo() {
    var x = document.getElementById("abc");
// x.innerText ="Xin chào tất cả sinh viên lớp T2207A"; đổi nội dung chữ
// x.innerHTML += '<i>Hello world!</i>'  // đổi cấu trúc html
    x.style.color = "#6495ED";
//     x.style.fontSize = f+'px';
//     f += 5;
    x.style.transform = 'rotate('+f+'deg)';
    f += 10;
}
function quaytron(){
    setInterval(demo,1);
}

var m = 10, s = 0;
function timer(){
    var min = document.getElementById("min");
    var sec = document.getElementById("sec");
    min.innerText = m;
    sec.innerText = s;
    s--;
    if(s<0){
       s = 59;
       m--;
    }
    if(m<0){
        clearInterval(si);
    }
}
var si;
function startTimer(){
    si = setInterval(timer,1000);
}
