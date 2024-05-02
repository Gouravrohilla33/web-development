function createBoard(){
    var boardsize = document.getElementById('boardsize').value;
    var display = document.getElementById('displayboard');
    display.innerHTML="";
    display.style.width =`${boardsize*100}px`;
    display.style.height =`${boardsize*100}px`;


    var row,col;
    for(row=0;row<boardsize;row++){
        for(col=0;col<boardsize;col++){
            var box = document.createElement('div');
            box.className = 'box';
            if((row+col)%2===0){
                box.classList.add('white');
            }else{
                box.classList.add('black');
            }
            display.appendChild(box);
        }
    }
}