// closure = a func defined inside another func,
//          the inner func has access to variables
//          and scope of the otehr func.
//          allow for private variables and state maintenance
//          used frequently in JS frameworks: React, Vue, Angular


//--------- example 1 ----------------

function outer(){
    let message = "Hello";

    // this are considered private
    function inner(){
       console.log(message);
    }


    inner();
}

//cannot excess cuz it out of the scope
message = "Goodbye";

outer();

//--------- example 2 ----------------

function createCounter(){
    let count = 0;

    function increment(){
  
        count++;
        console.log(`Count increased to ${count}`);
    }

    function getCount(){
        return count;
    }

    return {increment, getCount};

}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();
counter.increment();


//undefined cuz it cant read, its private.
console.log(counter.count);

console.log(`The current count is ${counter.getCount()}`);


//--------- example 3 ----------------

function createGame(){

    let score = 0;

function increaseScore(points){

    score += points;
    console.log(`+ ${points}pts`);
}

function decreaseScore(points){

    score -= points;
    console.log(`- ${points}pts`);
}

function getScore(){

    return score;
}

return {increaseScore, decreaseScore, getScore};


}

const game = createGame();

game.increaseScore(5);
game.increaseScore(3);
game.decreaseScore(2);

console.log(`The final score is ${game.getScore()}pts`);
