////////////one///////////////////////////
var monthNumber = parseInt(prompt("Please enter your birthdate month (1-12):"));

switch (monthNumber) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July") ;
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid input! Please enter a number between 1 and 12.");
}
//////////////////(2)////////////////////////////////////////////
var count = 1;

for (var i = 1; i <= 4; i++) {
    var row = "";
    for (var j = 1; j <= i; j++) {
        row += count + " ";
        count++;
    }
    console.log(row);
}
////////////////////////(3)/////////////////////////////////////////
for (var i = 1; i <= 1000; i++) {
    if (i % 13 === 0) {
        console.log(i);
    }
}
//////////////////////////(4)//////////////////////////////////////
function multiplication2(num1, num2) {
    var result = 0;
    for (var i = 0; i < num2; i++) {
        result += num1;
    }
    return result;
}


console.log(multiplication2(5, 4));  
console.log(multiplication2(2, 8)); 
console.log(multiplication2(7, 6));  
//////////////////////////////////(5)//////////////////////////////
function triangleArea(base, height) {
    return (base * height) / 2;
}


console.log(triangleArea(5, 4));  
console.log(triangleArea(2, 8));  
console.log(triangleArea(7, 6));  
//////////////////////////////////////(6)//////////////////////////
function isPandigital(num) {
    var numString = num.toString();
    for (var i = 0; i <= 9; i++) {
        if (numString.indexOf(i.toString()) === -1) {
            return false;
        }
    }
    return true;
}

console.log(isPandigital(98140723568910));  
console.log(isPandigital(90864523148909));  
/////////////////////////////(7)//////////////////////////////////
function drinkPrice(drink) {
    switch (drink.toLowerCase()) {
        case 'banana':
            return "The price of a banana drink is 20 dollars";
        case 'orange':
            return "The price of an orange drink is 15 dollars";
        case 'apple':
            return "The price of an apple drink is 18 dollars";
        default:
            return "Sorry, we don't have the price for that drink.";
    }
}

var favoriteDrink = prompt("Enter your favorite drink:");
console.log(drinkPrice(favoriteDrink));
///////////////////////////(8)////////////////////////////////////
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
console.log(fullName("Adam", "McCallen"));  
console.log(fullName("Alex", "Mercer"));    
