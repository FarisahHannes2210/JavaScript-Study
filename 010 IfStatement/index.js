// IF statement

// let age = 35;

// if under 18
// else if 19 - 25
// else 26 above
 
// if(age < 18){
//     console.log(`you are a kid`);
// }
// else if(age >=18 && age <=25){
//     console.log(`you are a young adult`);
//      // why this come out first?? cuz it execute 1 by 1 and this comes first. so plan ur if else properly
// }else{
//     console.log(`you are an adult`);
// }

{/* <label>Enter Your Age:</label>
<input type="text" id="ageInput">
<button type="submit" id="submit_btn">Submit</button>

<p id="age_result"></p> */}


const ageInput = document.getElementById("ageInput");
const submit_btn = document.getElementById("submit_btn");
const age_result = document.getElementById("age_result");
let age;

submit_btn.onclick = function(){

    age = ageInput.value;
    age = Number(age);

//better way to organize: start from bigger to smaller. (important - bigger - smaller)
if(age == 30){
    // console.log(`time to shine 30 folks!!`); 
    age_result.textContent = `time to shine 30 folks!!`;
}
else if(age >=26){
    // console.log(`you are an adult`);
    age_result.textContent = `you are an adult`;
}
else if(age >=18 && age <=25){
    // console.log(`you are a young adult`);
    age_result.textContent = `you are a young adult`;
    
}
else if(age < 18 && age >= 1){
    // console.log(`you are a kid`);
    age_result.textContent = `you are a kid`;
}
else{
    // console.log(`you were just born.`);
    age_result.textContent = `you were just born.`;
}

}



let isStudent = false;

if(!isStudent){
    console.log(`You are not student`);
}
else{
    console.log(`You are a student`);
}