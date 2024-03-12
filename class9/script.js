document.write('<h2>Write a javascript function that taken a students score as input and returns their gradebased on the folloeing grading scale:(using switch case) </h2>');
function score(a){
    var grade;
    switch(true){
        case a >= 90 && a <=100: 
        grade = 'A';
        break ;
        case a >= 80 && a <=89: 
        grade = 'B';
        break ; 
        case a >= 70 && a <=79: 
        grade = 'C';
        break ;
        case a >= 60 && a <=69: 
        grade = 'D';
        break ;
        case a >= 40 && a <=59: 
        grade = 'E';
        break ;  
        case a >= 0 && a <=39: 
        grade = 'F';
        break;
        default: grade = 'invalid';
       
    }
    return grade;
}
document.write(`Grade is: ${score(45)} <br>`);
document.write(`Grade is: ${score(67)} <br>`);
document.write(`Grade is: ${score(99)} <br>`);
document.write(`Grade is: ${score(400)} <br>`);
document.write(`Grade is: ${score(0)} <br>`);
document.write(`Grade is: ${score(88)} <br>`);

document.write('<h2> write a javascript function that takes number representing the day of the week(1 for monday,2 for tuseday, etc.) and returns the name of the day . </h2>');
function week(day){
   var dayname;
    switch(day)
    {
        case 1: dayname ='Monday';
        break;
        case 2: dayname ='Tuesday';
        break;      
        case 3: dayname ='Wednesday';
        break;       
        case 4: dayname ='Thrusday';
        break;       
        case 5: dayname ='Friday';
        break;       
        case 6: dayname ='Saturday';
        break;       
        case 7: dayname ='Sunday';
        break;
        default: dayname='invalid';
    }
    return dayname;
}
document.write(`Day is: ${week(2)} <br>`);
document.write(`Day is: ${week(8)} <br>`);
document.write(`Day is: ${week(7)} <br>`);
document.write(`Day is: ${week(3)} <br>`);
document.write(`Day is: ${week(5)} <br>`);


document.write('<h2>switch case(Month) </h2>');

function year(month){
    var monthname;
     switch(month)
     {
         case 1: monthname ='January';
         break;
         case 2: monthname ='February';
         break;      
         case 3: monthname ='March';
         break;       
         case 4: monthname ='April';
         break;       
         case 5: monthname ='May';
         break;       
         case 6: monthname ='June';
         break;       
         case 7: monthname ='July';
         break;
         case 8: monthname ='August';
         break;
         case 9: monthname ='September';
         break;
         case 10: monthname ='October';
         break;
         case 11: monthname ='November';
         break;
         case 12: monthname ='December';
         break;
         default: monthname='invalid';
     }
     
     return monthname;
 }
 document.write(`month is: ${year(3)} <br>`);
 document.write(`month is: ${year(13)} <br>`);
 document.write(`month is: ${year(8)} <br>`);
 document.write(`month is: ${year(11)} <br>`);
 document.write(`month is: ${year(1)} <br>`);


document.write('<h2>Javascript Basic Array</h2> <br>');
 var arr1 = ['Sahil','shubham','rahul','prince','dev'];
 document.write(arr1 + '<br>');
 document.write(arr1[2] + '<br>');

 var i;
 for(i=0;i<5;i++){
    document.write(arr1[i] + ' ');
 }
 
 var j;
 document.write('<ul type="square">');
 for(j=0;j<5;j++){
    document.write( '<li>'+arr1[j] + '</li>');
 }
 document.write('</ul>');
document.write('<h2>To adding arrar numbers</h2>');
 var arr2 = [23,87,65,88,32,6];
 var k;
 var sum = 0;
 for(k=0;k<arr2.length;k++){
   
    sum=sum + arr2[k];
   
 }
 document.write('sum is = ' +sum+ '<br>');
