document.write('<h2 align="centre">Javascript Datatype</h2>');

document.write("<h4>Number Database</h4>");

let a = 23;
let b= 4.5;
document.write('value of a is ='+a+'<br>');
document.write('datatype of a is ='+typeof(a)+'<br>');
document.write('value of b is ='+b+'<br>');
document.write('datatype of b is ='+typeof(b)+'<br>');

document.write("<h4>string Database</h4>");
let str1 = 'Geeta University';
let str2 = '34';
document.write('value of str1 is ='+str1+'<br>');
document.write('datatype of str1 is ='+typeof(str1)+'<br>');

document.write('value of str2 is ='+str2+'<br>');
document.write('datatype of str2 is ='+typeof(str2)+'<br>');

document.write('<h4>Object Datatype</h4>');

let arr1 =['Geeta',34,true,'University'];


document.write('value of arr1 is ='+arr1+'<br>');
document.write('datatype of arr1 is ='+typeof(arr1)+'<br>');


let obj1 ={
    fname: 'Geeta',
    Iname: 'Universitry',

}


document.write('value of obj1 is ='+obj1+'<br>');
document.write('datatype of obj1 is ='+typeof(obj1)+'<br>');

let n=null;
let n1= undefined;
let n2 ;

document.write('value of n is ='+n+'<br>');
document.write('datatype of n is ='+typeof(n)+'<br>');

document.write('value of n1 is ='+n1+'<br>');
document.write('datatype of n1 is ='+typeof(n1)+'<br>');

document.write('value of n2 is ='+n2+'<br>');
document.write('datatype of n2 is ='+typeof(n2)+'<br>');

document.write('<h2 align="centre">Javascript Function</h2>');
//basic function syntax

function msg(){
    document.write('Hello Javascript <br>');

}

msg();
msg();
msg();
msg();
msg();
msg();
document.write('<h4>Function with arguments and parameters</h4>');

function fullname(fname,iname){
        document.write(fname+" "+iname);
}
fullname('Geeta','University')

document.write('<hr>');

function sum(a,b){
      let add= a+b;
      document.write("addition is :" +add+ '<br>');
}
sum(49,54);
sum(78,98);


document.write('<h4>Function with return value </h4>');

function square(n){
let sq = n*n;
return sq;    
}

let result=square(5);
document.write('value of result is =' +result +'<br>');

let r1=square(6);
document.write('value of r1 is =' +r1);

document.write('<hr>');

function summarks(sub1,sub2,sub3,sub4,sub5){
    let total_marks = sub1+sub2+sub3+sub4+sub5;
    return total_marks;
}
let final= summarks(86,95,89,96,84);
document.write('total marks:'+ '<br>');

function percentage(t){
    let pr = t/500*100;
    return pr;

}

let per = percentage(final);
document.write('percentage ='+per+'%<br>');

document.write('<h4>Function Expression </h4>');

let oddeven = function(n){
    let chek = (n%2===0) ? 'Even Number': 'Odd Number';
    return chek;
}
let c=oddeven(4);
document.write('number is:' +c+ "<br>");


