// reduce () =  reduce the elements of an array to
// a  single
//              value

const prices = [5, 56,12,10,23];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

function sum(accumulator, element){
    return accumulator + element;

}

const grades = [75, 36, 50, 90, 55];

const maximum = grades.reduce(getMax);
console.log(`Maximum score: ${maximum}`);

const minimum = grades.reduce(getMin);
console.log(`Minimum score: ${minimum}`);

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}

function getMin(accumulator, element){
    return Math.min(accumulator, element);
}