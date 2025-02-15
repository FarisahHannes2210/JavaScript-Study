

///  <h1>Temperature Conversion</h1> <br>
{/* <input type="number" id="textbox"><br>

<input type="radio" id="toCelcius">
<label for="toCelcius">Fahrenheit to Celcius (F -> C)</label><br>

<input type="radio"  id="toFahrenheit">
<label for="toFahrenheit">Celcius to Fahrenheit (C -> F)</label><br>

<button type="button" onclick="convert()">Submit</button>
<p id="result">Select a unit</p> */}

const textbox = document.getElementById("textbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
let temp;




function convert(){

    if(toFahrenheit.checked){

        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";

    }
    else if(toCelcius.checked){

        temp = Number(textbox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C";

    }
    else{
        result.textContent = "Select a unit";
    }

}