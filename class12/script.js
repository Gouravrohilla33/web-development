// Write a script that alternates the background color of table rows.Use document.getElementsByTagname to get all elements, within a table,then manipulate their CSS properties to achieve the alternating colors.
var rows =document.getElementsByTagName('tr');
var i;
for(i=0;i<rows.length;i++)
{
    if(i%2==0)
    {
        rows[i].className='odd';
    }
    else{
        rows[i].className="even"; 
    }
}
// Build a filter function that hides elements based on a given class name.The function should take the class name as input and hide all elements with that class using document.
//     getElementsByTagname

function hideElements(cname){
     var elements = document.getElementsByClassName(cname);
     var i;
     for(i=0;i<elements.length;i++){
        elements[i].style.display="none";
     }
}
//Write a js function that counts the total number of links (<a> tag) ina werbpage using the document.links property //

function countLinks(){
    var links = document.links;
    var tlinks = links.length;
    document.write("<br>"+"Total number of links in this page is "+tlinks+"</br>");
}
countLinks();
// document.write(<h2>reate a script that retrieves and displays the title of the current webpage using the document.title property</h2>)
var pagetitle = document.title;
document.write('Page title is: '+pagetitle);

document.write('<hr>')
function changesBG(){
    var body =document.body;
    body.style.backgroundColor = "lightgreen";
    
}
// changesBG();