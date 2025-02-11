// while loop = repeat loop while condition is true.

//-----WHILE LOOP

// let username = "";

// while(username == "" || username === null)
// {
//     username = window.prompt("Enter your username");
// }
// console.log(`Hello ${username}`);


//------ DO WHILE

// let username;

//     do{
//         username = window.prompt("Enter your username");

//     }while(username == "" || username === null)

//         console.log(`Hello ${username}`);

//------------ task 1 : username and password

let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if(username === "qw" && password === "qw"){
        loggedIn = true;
        console.log("You are logged in!!");
    }
    else{
        console.log("Invalid credentials. Please try again!");
    }
}


