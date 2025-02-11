// for loop = repeat some code for a LIMITED amount of time

for(let i = 0; i <= 10; i++){
    i+= 2;
    console.log(i);
}

//-- skip a certain number or whatever

console.log(`CONTINUE`);

for(let n= 0; n <= 20; n++){

    if(n == 13){
        continue;
    }
    else{
        console.log(n);
    }
    
}

//-- breakk a certain number or whatever

console.log(`BREAK`);

for(let n= 0; n <= 20; n++){

    if(n == 13){
        break;
    }
    else{
        console.log(n);
    }
    
}