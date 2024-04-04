// Implement a function that displays the URLs of all images(<img> tages ) present on a webpage using the Document.images property.


function imagesURLs(){
    var images = document.images;
    var imageurls = [],i;

    for(i=0;i<images.length;i++){
        imageurls.push(images[i].src);
    }

    imageurls.forEach(function(url){
        document.write(url+'<br>');
    });
}

imagesURLs();
document.write('<hr>');
 var elements = document.body.innerText;
 var elements = document.body.innerHTML;
 var elements = document.getElementsByClassName('header').innerHTML;
 var elements = document.getElementById('content').innerHTML;
 var elements = document.getElementById('content').getAttribute('class');
 var elements = document.getElementById('content').getAttribute('style');
 var elements = document.getElementById('content').attributes;
 var elements = document.getElementById('content').attributes[1].value;

 console.log(elements);


 function replaceText(){
    var contents = document.getElementById('contents');
    contents.innerHTML = 'Hello Be happy Be good';
 }
 replaceText();
