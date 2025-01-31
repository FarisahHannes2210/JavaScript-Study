//accept user input*****

// 1. easy way = make window prompt
// 2. professional way = HTML textbox

//easy wayy

// let username; // assign username

// username = window.prompt(`What's your username?`); // asked rigth away

// console.log(username); //print out

// professional way

let username;

document.getElementById("submit_button").onclick = function(){

   username =  document.getElementById("username_box").value;
   console.log(username);

   document.getElementById("headerr").textContent = `Welcome ${username}`;

}




