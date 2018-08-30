// var btnNew = document.getElementById('btnAdd');
var inputText = document.getElementById('inputText');
inputText.focus( );

inputText.onkeyup = function(event){
    if(event.which===13){
    var itemText = inputText.value;

    if(!itemText || itemText ==="" || itemText ===" ") return false;
    
    addNewItem(document.getElementById('todolist'), itemText);
    inputText.focus();
    inputText.select();
    }
};

var totalItems =0;

function updateItemStatus(){
    var chId =  this.id.replace('cb_','');
    var itemText = document.getElementById('item_'+chId);

    if(this.checked){
        itemText.className = 'checked';
    }
    else{
        itemText.className = '';
    }
}

function renameItem(){
    var newText = prompt("what should this item be rename to?");
    if(!newText || newText ==="" || newText ===" ") return false;

    var spanId =this.id.replace('pencilIcon_','');
    var span = document.getElementById('item_'+spanId);
    span.innerText = newText;    
}

function removeItem(){

    var listItemId = this.id.replace('li_','');
    document.getElementById('li_' + listItemId).style.display = "none";
 
}


function addNewItem(list, itemText){
    // totalItems++;
    var date = new Date();
    var id = "" + date.getHours()+date.getMinutes()+date.getSeconds()+date.getMilliseconds();

    var listItem = document.createElement('li');
    listItem.id ='li_'+id;
    listItem.ondblclick = moveItem;

    var checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.id='cb_' + id;
    checkBox.onclick = updateItemStatus;

    var span = document.createElement('span');
    span.id = 'item_' + id;
    span.innerText = itemText;
    // span.onclick = renameItem;

    var pencilIcon = document.createElement('i');
    pencilIcon.className='fas fa-pen';
    pencilIcon.onclick = renameItem;

    var minusIcon = document.createElement('i');
    minusIcon.className ='fas fa-minus-square';
    minusIcon.id ='minusIcon_'+id;
    minusIcon.onclick= deleteItem;



    listItem.appendChild(checkBox);
    listItem.appendChild(span);
    listItem.appendChild(pencilIcon);
    listItem.appendChild(minusIcon);
    list.appendChild(listItem);

}

var donelist = document.getElementById('donelist');
function moveItem(){
    var listItemId = this.id.replace('li_', '');
    var listItem = document.getElementById('li_'+listItemId);
    var listItemParentId = listItem.parentElement;
    console.log(listItemParentId);
    if(listItemParentId == donelist){
        todolist.appendChild(listItem);
    }else{
        donelist.appendChild(listItem);
    }
}

function deleteItem(donelist){
    var listItemId = this.id.replace('minusIcon_','');
    document.getElementById('li_'+ listItemId).style.display="none";
}


