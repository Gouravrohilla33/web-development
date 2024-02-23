document.write('Hello Javascript!');


/* to print output */
// document.write()
// window.alert()
// console.log()
// innerHTML()

document.write('<h2>Javascript Output</h2>');

// window.alert('Hello Alert!');

document.getElementById('text').innerHTML = 'Hello Geeta University';

console.log('Hello Sir!');

document.write('<h2 align="center">Javascript Variables</h2>');

// var ,car,const

//var
document.write('<h3>Javascript Variables var</h3>');
var a=35;
var name1 = 'Geeta University';
var d = 3.3 ;
var a = 76;
a=800;

document.write('<br> value a is : ' + a + '<br> value name is :' + name1 , '<br>value d=' + d); // also,we can replace + to ,
document.write(' <br>value a is :' +a);

if(a==800){
    var f = 307;
    document.write('<br>value f is inside if block :' +f);
}
document.write('<br>value f is outside if block :' +f);

//let
document.write('<h3>Javascript Variables let</h3>');
let b = 78;
   b= 60;
//let b = 90; redeclare not supported
document.write(' value of b is :' + b);

if(b==60){
    let s = 3076;
    document.write('<br>value s is inside if block :' +s);
}
// document.write('<br>value s is outside if block :' +s); let is block scope variable

//const
document.write('<h3>Javascript Variables const</h3>');
const c= 45;
//c=90;
//const c= 67; redecalre and update not supported
document.write('value c is :' + c);

if(c==45){
    const r = 37;
    document.write('<br>value r is inside if block :' +r);
}
// document.write('<br>value r is outside if block :' +r);  const is block scope varible 

// let l , y ,x;
// l=2;
// y=3;
// x=l+y;