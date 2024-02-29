//  immediate Infoked function Expression (IIFE) Function

document.write('<h2>Arrow function</h2>');

let factorial = (n) =>{
    let fact = (n==1||n==0)? 1:n*factorial(n-1);
    return fact;
}
let f=factorial(6);
document.write('factorial is:'+f +'<br>');

let factori = y =>(y==1||y==0)? 1:y*factori(y-1);
let fy=factori(4);
document.write('factorial is:'+fy+'<br>');


let oddeven = a =>(a%2===0)?'even':'odd' ;
let b=oddeven(8);
document.write('number is :'+b);

