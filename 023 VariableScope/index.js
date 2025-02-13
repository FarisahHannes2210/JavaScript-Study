//variable scope = where a variable is recognized and accessible (local and global)

function function1(){
    let x = 1; //local variable
    console.log(x);
}

function function2(){

    function1();
    let x = 2; //local variable
    console.log(x);
}

function1();
function2();

let x = 3; // outside of function(global variable) 
// //accesible in functions and outside function
console.log(x);