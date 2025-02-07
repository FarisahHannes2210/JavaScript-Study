//make var button

//property accessors.method(waht we targeting here)
var button = document.querySelector('button');
var box = document.getElementById('changeMe');


//assign an event, when a button is clicked, the box will change colour.

// button.onclick = function changeColor(){
//     box.style.background = 'red';
// }

//we can also do it like this if we put onclick = "changeColor()" on the index.html
function changeColor(){

    if(box.style.background == 'blue'){

        box.style.background = 'red';

    }else{
       box.style.background = 'blue';
    }

   
}