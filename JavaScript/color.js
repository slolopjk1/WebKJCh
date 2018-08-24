var links ={
    setacolor:function(color){
//         var link=document.getElementsByTagName('a');
// var i=0;
// while(i<link.length){
//     link[i++].style.color=color;
// }
//     }
    $('a').css('color',color);
    }
}

var Body={
setcolor:function(color){
    // document.querySelector('body').style.color=color;
    $('body').css('color',color);
}
,
setBackgroundColor:function(color){
    $('body').css('backgroundColor',color);
}
}
// function bodysetcolor(color1,color2){
//     var target =document.querySelector('body').style;
//     target.backgroundColor=color1;
//     target.color=color2;
// }
function darkdayhandler(bb){
if(bb.value==='dark'){
links.setacolor('black');
Body.setcolor('black');
Body.setBackgroundColor('white')
bb.value='day';
}
else{
links.setacolor('white');
Body.setcolor('white');
Body.setBackgroundColor('black')
bb.value='dark';
}
}