document.write('Immediate ')
document.write('<h2>Immediate invoked Function Expression(IIFE)</h2>');
// ()();

(function msg(){
    document.write('Good Morning Everyone!');
})();

document.write('<hr>');
(function sum(a,b){
    let add = a+b;
    document.write('Sum is:  ' +add+ '<br>');
})(34,54);

document.write('<hr>');
((n)=>{
   let sq=n*n;
   document.write('square is'+sq);
})(4);

document.write('<h2>Template String</h2>');

function calculate(a,b){
    let sum = a+b;
    let sub = a-b;
    let mul = a*b;
    document.write("sum is= "+sum+'<br>' + 'sub is='+sub+ '<br>' + 'multipaction is='+mul);
    document.write('<hr>');
    document.write(`sum is :  ${sum} <br> "sub" is: ${sub} <br> multipication is :${mul}` );
}
calculate(5,5);


document.write('<h2> javascript objects</h2>');

let obj1 ={
      name: 'sahil',
      roll:12345,
      Branch: 'bca',
      message:function(){
        return 'hello javascript';
      },
      arr1:['cse','mba','Btech','bba'],
      obj2:{
        coursel:'bba',
        course2:'mba',
        course3:'btech',
        course4:'bca',
      },
      details:function(){
        return (`name is: ${this.name}<br> roll is: ${this.roll} <br> branch is :${this.Branch}<br>`);
      }
}

let name=obj1.name;
document.write(`name is ${name}<br>`);
document.write(`roll is ${obj1.roll} <br>`);
document.write(`branch is ${obj1.Branch} <br>`);
document.write(`message is ${obj1.message()} <br>`);
document.write(`array is ${obj1.arr1} <br>`);
document.write(`object is ${obj1.obj2.course3} <br>`);
document.write(`details is => <br> ${obj1.details()} <br>`);x
