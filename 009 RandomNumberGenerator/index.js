
// //BASIC OF RANDOM NUMBER GENERATOR------------------

// // let randomNum = Math.random(); //generate from 0-1
// // let randomNum = Math.random() * 6; //generate from 0-6
// // let randomNum = Math.floor(Math.random() * 6); //generate from 0-5, no decimal
// let randomNum = Math.floor(Math.random() * 6) + 1; //generate from 1-6, no decimal
// // let randomNum = Math.floor(Math.random() * 100) + 1; //generate from 1-100, no decimal


// console.log(randomNum);

// //generate random number from 50-100-------------------
// const min = 50;
// const max = 100;
// let newNum = Math.floor(Math.random() * (max-min)) + min;
// console.log(newNum);

/* <div id="box_container">
<label id="randomNum">--</label>
<div id="button_container">
    <button id="random_btn">Roll</button>
</div> 
</div> */

const random_btn = document.getElementById("random_btn");
const labelNum = document.getElementById("labelNum");
let randomNum;

//min max for generate random number
const min = 3;
const max = 10;

random_btn.onclick = function(){
    
    randomNum = Math.floor(Math.random() * (max-min)) + min;
    labelNum.textContent = randomNum;

}
