//task 1

let obj1={name:"Person1",age:5};
let obj2={age:5,name:"Person1"};
let strn1=JSON. stringify(obj1);
let strn2=JSON. stringify(obj2);
console.log(strn1===strn2)

//task 2
var Request = new XMLHttpRequest();
Request.open("GET","https://restcountries.com/v3.1/all  ",true)
Request.send();
Request.onload=function name() {
var data=Request.response;
var result=JSON.parse(data)
for (var i=0;i<result.length;i++){
    console.log(result[i].flags.svg)
}

}
//task 3

var Request1 = new XMLHttpRequest();
Request1.open("GET","https://restcountries.com/v3.1/all  ",true)
Request1.send();
Request1.onload=function name() {
var data1=Request1.response;
var result1=JSON.parse(data1)
for (var i=0;i<result1.length;i++){
    console.log(result1[i].name.common +','+ result1[i].region +',' +result1[i].subregion+ ',' + result1[i].population )
}
}