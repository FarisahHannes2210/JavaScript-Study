//callback = a function that is passed as an argument to another
//          function.

//      used to handle asynchronous operations:
///     1. reading a file
////    2. network requests
//      3. interacting with databases

//      "Hey when youre done, call this next."

// procedure:
// 1. hello function mentioned
// 2. go to hello func
// 3. print hello
// 4. callback?
// 5. go back to when hello funct mentioned
// 6. see goodbye mentioned
// 7. go to goodbye func
// 8. print goodbye


// hello(goodbye);
// wait(leave);
// wait(hello);

// function hello(callback){
//     console.log("hello");
//     callback();
// }

// function wait(){
//     console.log("wait");
// }

// function leave(){
//     console.log("leave!!");
// }

// function goodbye(){
//     console.log("goodbye!!");
// }

//---------------------------------------------

sum(displayPage, 5, 4);

function sum(callback, x,y){
    let result = x + y;
    callback(result);

}

function displayConsole(result){
    console.log(`result: ${result}`);

}

function displayPage(result){
    document.getElementById("myH1").textContent = `Result: ${result}`;

}