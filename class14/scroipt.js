//Javascript GET and SET Methods

var elements;
elements = document.getElementById('header').innerText;
elements = document.getElementById('header').innerHTML;
elements = document.getElementById('header').getAttribute('id');
elements = document.getElementById('header').getAttribute('style');
elements = document.getElementById('header').attributes;
elements = document.getElementById('header').attributes[2];
elements = document.getElementById('header').attributes[2].value;
console.log(elements);

function toggleButton(idname) {

    var button = document.getElementById(idname);
    var con = document.getElementsByClassName('contents ');

    var text = button.innerText;
    for (var i = 0; i < con.length; i++) {

        if (text == 'Hide') {
            con[i].style.display = 'none';
            button.innerHTML = 'Show';

        }
        else {
            con[i].style.display = 'block';
            button.innerHTML = 'Hide'
        }
    }
}
const button = document.getElementById('themeButton');
button.addEventListener('click', () => {
    const body = document.body;
    if (body.classList.toggle('blue')) {
        button.textContent = 'Blue';
    } else {
        button.textContent = 'Dark';
    }
});