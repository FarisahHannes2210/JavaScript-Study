// .checked : property that determines the checked state
// of an HTML checked box or radio button element.

const checkbox_inp = document.getElementById("checkbox_inp");

const visa_btn = document.getElementById("visa_btn");
const mastercard_btn = document.getElementById("mastercard_btn");
const paypal_btn = document.getElementById("paypal_btn");

const submit_btn = document.getElementById("submit_btn");

const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

submit_btn.onclick = function(){
    if(checkbox_inp.checked){
        subResult.textContent = `You are subscribed!!`;

    }
    else{
        subResult.textContent = `You are NOT subscribed!!`;
        
    }

    if(visa_btn.checked){
        paymentResult.textContent = `You are paying using your Visa`;
    }
    else if(mastercard_btn.checked){
        paymentResult.textContent = `You are paying using your Master Card`;

    }
    else if(paypal_btn.checked){
        paymentResult.textContent = `You are paying using your PayPal`;

    }
    else{
        paymentResult.textContent = `Please choose a method to pay your subscription`;

    }
}