// switch =  can be an efficient placement for many if else statements

let day = `pizza`;

switch(day){

    case 1:
        console.log(`Its Monday`);
        break;
    case 2:
        console.log(`Its Tuesday`);
        break;
    case 3:
        console.log(`Its Wednesday`);
        break;
    case 4:
        console.log(`Its Thursday`);
        break;
    case 5:
        console.log(`Its Friday`);
        break;
    case 6:
        console.log(`Its Saturday`);
        break;
    case 7:
        console.log(`Its Sunday`);
        break;
    default:
        console.log(`Thats not a day`);      
}

let testScore = 78;
let letterGrade;

switch(true){
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    case testScore >= 50:
        letterGrade = "E";
        break;
    default:
        letterGrade = "F";

}

console.log(`Grade: ${letterGrade}`);

