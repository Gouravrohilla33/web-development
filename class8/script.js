function msg(){
     alert('Hello Everyone');
}
// msg();
function changetheme(){
    document.body.style.background = 'skyblue';
}

function changetheme1(){
    document.body.style.background = 'lightgreen';
}

function changetheme2(){
    document.body.style.background = 'red';
    document.getElementById('input').style.background = 'yellow';
}
function check(a){
    // let a=-2;
  
    if(a>=0){
        if(a==0){
            document.write("Zero <br>");
        }
        else
        document.write('positive<br>');
    }
    else{
        document.write('negative<br>');
    }

}
check(-8);
check(9);
check(0);
function day(n){
    if(n>0 && n<=7){
        if(n==1){
            document.write('monday<br>');
        }
        if(n==2){
            document.write('tuesday<br>');
        }  if(n==3){
            document.write('wednesday<br>');
        }  if(n==4){
            document.write('thrusday<br>');
        }  if(n==5){
            document.write('friday<br>');
        }
        if(n==6){
            document.write('saturday & weekend<br>');
        }  if(n==7){
            document.write('sunday & weaekend<br>');
        }
    }
    else
    document.write('wrong data<br>');
}
day(1);
day(2);
day(3);
day(4);
day(5);
day(6);
day(7);
day(8);
day(0);

function num(x,y,z){
    if(x==y&&y==z){
        document.write('all equal<br>');
    }
    else{
    if(x>y){
        if(x>z){
            document.write('greater is x <br>');
        }
        else{
            document.write('greater is z <br>')
        }
       
    }
    else{
    if(y>z){
        document.write('greater is y<br>')
    }
    else
    document.write('greter is z<br.');
}
  
}
}
num(1,1,1);
num(2,1,1);
num(1,2,1);
num(1,1,2);