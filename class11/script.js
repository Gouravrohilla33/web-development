document.write('<h2>Multidimensional Array</h2>');


var arr1 = [
    ['Humanshu',12345,'Btech',21],
    ['Saksham',345,'Btech',20],
    ['Sahil',125,'BCA',18],
    ['Aman',2345,'Bsc',21],
    ['Rahul',1234,'Btech',21],
];
document.write(arr1[0]+'<br>');
document.write(arr1[1]+'<br>');
document.write(arr1[2]+'<br>');
document.write(arr1[3]+'<br>');
document.write(arr1[4]+'<br>');
document.write(arr1[2][2]+'<br>');
document.write(arr1[0][0]+'<br>');
document.write('<hr>');
var i;
for(i=0;i<arr1.length;i++){
    document.write(arr1[i]+'<br>');
}
document.write('<hr>');
var i,j;
for(i=0;i<arr1.length;i++){
for(j=0;j<arr1[i].length;j++){
    document.write(arr1[i][j]+' ');
}
document.write('<br>');
}

document.write('<hr>');
var i,j;
document.write('<table border="1" width="80%" align="center" cellpadding="10">')
document.write('<tr><th>Name</th><th>Roll no.</th><th>Branch</th><th>Year</th></tr>')
for(i=0;i<arr1.length;i++){
    document.write('<tr>');
for(j=0;j<arr1[i].length;j++){
    document.write('<td>'+arr1[i][j]+'</td> ');
}
document.write('</tr>');
}
document.write('</table>');

//write script for print employee details(name,designation ,sallery and contact) with tabular format


var emp=[
    ['Salksham','developer',5000000,9547432773],
    ['Sahil','Bagger',5000,8547432963],
    ['Dev','WasherMan',50000,754789893],
    ['Manav','Servise',800000,7455627763],
    ['Ankur','developer',100000,8663327763],
];

document.write('<hr>');
var i,j;
document.write('<table border="1" width="80%" align="center" cellpadding="10">')
document.write('<tr><th>Name</th><th>designation</th><th>Sallery</th><th>Contact</th></tr>')
for(i=0;i<emp.length;i++){
    document.write('<tr>');
for(j=0;j<emp[i].length;j++){
    document.write('<td>'+emp[i][j]+'</td> ');
}
document.write('</tr>');
}
document.write('</table>');


document.write('<h2>Javascript DOM</h2>');
var elements;
elements = document.getElementById('heading1');
elements = document.getElementsByClassName('heading2');
elements = document.getElementsByTagName('h3');
console.log(elements);
document.write('<h2>Write a function taht takes an HTML element ID as input and returns the count of all child elements within that element. You can use document.getElementaryById to retrieve the parent element.</h2>')

function countChildElements(idname){
    var parentElement = document.getElementById(idname);
    if(parentElement){
        return parentElement.childElementCount;
    }else{
        return 0;
    }
}
var counts = countChildElements('demo');
document.write(`total elements is :${counts} <br>`);
document.write('<h2>create a function that accepts a class name and a Css property-value pair as arguments . this function should locate all elements with the specified class name using document.getElementByClassName and apply the given css style to each of them.</h2> ');

function changeStyleClassname(classname,property,value){
    var elms = document.getElementsByClassName(classname);
    var i;
    for(i=0;i<elms.length;i++){
        elms[i].style[property] = value ;
    }
}
changeStyleClassname('test','color','red');
changeStyleClassname('test','background','lightgreen');
changeStyleClassname('test','text-align','center');
changeStyleClassname('test','font-style','italic');