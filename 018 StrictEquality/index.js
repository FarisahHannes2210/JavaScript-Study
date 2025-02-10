// = assignment operator
// == compare if values are equal
/// === strict equality (compare if datatype and value is equal)
// != inequality operator
// !== strict inequality operator

const PI = 3.14;

if(PI == "3.14"){
    console.log("same value");
}
else{
    console.log("NOT same value");
    
}


if(PI === 3.14){
    console.log("same value and datatype");
}
else{
    console.log("NOT same value or datatype");
    
}


if(PI != 3.14){
    console.log("NOT PI");
}
else{
    console.log("This is PI");
}

if(PI !== "3.14"){
    console.log("NOT THE SAME DATATYPE OR VALUE");
}
else{
    console.log("Same datatype and value");
}



