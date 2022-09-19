
var x;
x = 10;// number
x = "hello world";
x = true;
console.log(x);// in ra
if (x == true){
    console.log("Demo 1 T2207A");
}else {
    console.log("x false");
}
for (var i=0;i<10;i++){
    console.log("vudepzai");
}
var s1 = 5;
var s2 ="xin chao ";
console.log(s1+s2);
console.log(s2+s1);
console.log(s1+"5");
var a = [];
a[0]=1;
a[1]= "helloworld";
a.push(100);//a[2]= 100;
a.push("t2207a");
function tinhtong(a,b) {
    return a=b;

}
function tinhhieu(a,b) {
    console.log(a+b);

}
var tinhtich= function (a,b) {
    return a*b;

}
var z=tinhtong(2,3);
var k=tinhtich(3,4);
tinhhieu(5,2);
//11
var t =100;
function demo(){
    var xyz = document.getElementById("head");  //xyz nhu nao h1 nhu the
    xyz.innerText += (" "+t);
    t--;
    if(t<0){    //khi nho hon 0 xoa quy tac(stop)
        clearInterval(at);
    }
}
// setTimeout(demo,1000);  //callback function  // 1000ms tgian se chay 1 lan
var at = setInterval(demo, 1000);
console.log("after demo...");
////baitap
var s =0;


//tam dung 1s
// demo();


//Con mua dem qua
// // Bien
// var x;
// x = 10; // number
// x ="Hello World!";
// x = true;
// console.log(x); //in ra
// if(x==true){
//     console.log("Hoc Javascript T2207A");
// }else{
//     console.log("x false");
// }
// // Loop for
// for(var i=0;i<10;i++){
//     console.log("Javascript");
// }
// var s1= 5;
// var s2= "Xin chao";
// console.log(s1+s2); // = 5Xin chao
// console.log(s2+s1); // = Xinchao5
// console.log(s1+5);  // = 10
// var a = []; // gia tri cua bien a la 1 mang, khi khai bao khong can
// a[0] = 1;
// a[1] = "Hello";
// a.push(100);    // a[2] = 100;
// a.push("T2207A");
//
// //Function (Ham)
// function tinhtong(a,b){
//     return a=b;
// }
// function tinhhieu(a,b){
//     console.log(a+b);
// }
//
// //Ham tinh tich 2 so
// var tinhtich = function (a,b){     //cach toi thieu
//     return a*b;
// }
// var z = tinhtong(2,3);
// var k = tinhtich(3,4);
// tinhhieu(5,2);