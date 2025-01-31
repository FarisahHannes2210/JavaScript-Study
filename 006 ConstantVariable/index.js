// for constant variable, primitive data types (number and boolean) are always in
//  upper case letter eg.(PI, UNIT_MEASURE) etc

const PI = 3.14159;
let radius;
let circumference;


document.getElementById("submit_button").onclick = function(){

    radius = document.getElementById("radius_box").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;

    document.getElementById("header3").textContent = `The circumference of the circle is ${circumference}cm`;


}


