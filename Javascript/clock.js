var m = 10;
var s = 0;
function clock(){
        var xyz = document.getElementById("hour");  //xyz nhu nao h1 nhu the
        xyz.innerText += (" " + m);
        m--;
        if(m<0){    //khi nho hon 0 xoa quy tac(stop)
            clearInterval(at);
        }
}

var at = setInterval(demo, 1000);
console.log("after demo...");