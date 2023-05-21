const day = 6;
switch(day) { //a switch statement is used to check the same variable against multiple cases
    case 1: //it checks the variable chosen against these cases
        console.log("Monday");
        break; //the break keyword is needed to ensure the statement doesn't run multiple parts of code
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default: //The default effectively works as an else statement, as a catch all
        console.log("I don't know that");
}