var itemName = ['Laptop','Mobile','Printer','Headphone'];
var itemPrice = [30000,20000,4000,2000];

//Showing Product Name
var nameitem = document.querySelector('#item_name');
for(var i = 0 ;i<itemName.length;i++){
    nameitem.innerHTML += `<option value="${itemPrice[i]}">${ itemName[i]}</option>`;
}

//Showing Quantity  

var j;
var qty = document.querySelector('#qty');
for(j=1;j<10;j++){
    qty.innerHTML +=` <option value="${j}">${j}</option>`;
}

function addItem(){
    var display = document.querySelector('#displayItem');
    var productName = document.querySelector('#item_name').options[document.querySelector('#item_name').selectedIndex].text;
    var itemqty = document.querySelector('#qty').value;
    var itemPrice = document.querySelector('#item_name').value;
    var body = document.querySelector('tbody');
    var row = document.createElement('tr');
    var col1 = document.createElement('td');
    col1.innerHTML= productName;
    row.appendChild(col1);

    col2 = document.createElement('td');
    col2.innerHTML = itemPrice;
    row.appendChild(col2);

    col3 = document.createElement('td');
    col3.innerHTML = itemqty;
    row.appendChild(col3);

    col4 = document.createElement('td');
    var prices = col4.innerHTML = parseInt(itemqty*itemPrice);
    row.appendChild(col4);
    body.appendChild(row);
    var displayTotal = document.querySelector('#total');
    var totalAmount =  parseInt(displayTotal.innerHTML || 0);
    totalAmount += prices;
    displayTotal.innerHTML = totalAmount;
}