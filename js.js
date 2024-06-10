
/*   (1)
var job_title = window.prompt("Please enter your job title: ");
var location = window.prompt("Please enter your location: ");
var number_of_chld = parseInt(window.prompt("Please enter your number of children: "));
var partner = window.prompt("Please enter the name of your partner: ");
function tellFortune(numch, partner, geographic, job_title) {
    if (typeof partner !== 'string' || partner.trim() === "") {
        window.alert("Please enter a correct name.");
    } else {
        tellFortune(job_title, location, number_of_chld, partner);
    }
    
    var message = "You will be a " + job_title + " in " + geographic + ", and married to " + partner + " with " + numch + " children.";
    window.alert(message); 
}
*/
//////////////////////////////////////////////////////////////////////////////
/*
(2)
*/
function calculateDogAge(puppyAge) {
    var dogAge = puppyAge * 7;
    var message = "Your doggie is " + dogAge + " years old in dog years!";
    window.alert(message) ; 

}

var puppyAge = window.prompt("Please enter your puppy's age:");
calculateDogAge(puppyAge);


///////////////////////////////////////////////////////////////////////////////
/*
(3)
*/
function calculateSupply(age, amountPerDay) {   //30
   // calculateSupply(30, 3);

    const maxAge = 100;
    const yearsRemaining = maxAge - age;//100-30 = 70
    const totalAmount = yearsRemaining * amountPerDay * 365.25; // considering leap years
    const message = "You will need " + totalAmount.toFixed(0) + " units to last you until the ripe old age of " + maxAge;
    window.alert(message)  ; 
}


var  age  = parseInt(window.prompt("plase enter your age :  " )) ; 
var amountPerDay =parseInt(window.prompt("plase enter your age :  " )) ; 
calculateSupply(age, amountPerDay);  

/*
(4)
*/

function greet(name) {
    var message =  "Hello " + name;
window.alert(message);
}


var num =window.prompt("plase enter your name :") ; 

greet(num) ; 



/*
(5)

what is the error:
(a)function double(cat) {
  return 2 * x;
}

===>The error in the double function is that it tries to use a variable x which is not defined. 
It should use the cat parameter instead. 
if i want fixed this function i will 
give him 2 paerameter inside the scope()


(b)
function double(7) {
  return 2 * 7;
}
==> declare the function whith start number 



(c)function double('7') {
  return 2 * 'x';
}
==> declare the function whith start '' single qutetion 


  ==>
*/
/*
(6)


function sub(x) {
    return 2 * x ;
  }
  
  function sub ( x)
  return 2 * x;
  }
  
  function sub (x)  {
    return 2 * x;

/*
(7)
*/
function cube(number) {
    return Math.pow(number, 3);
}


console.log(cube(4)); 
console.log(cube(2));
console.log(cube(0)); 

/*
(8)
*/

function   multiply (x,y){

return x*y   ; 

}

/*
(9)
*/
function canIGetADrivingLicense(age) {
    if (age >= 20) {
        return "Yes, you can get a driving license.";
    } else {
        var yearsToWait = 20 - age;
        return "Please come back after " + yearsToWait + " years to get one.";
    }
}

console.log(canIGetADrivingLicense(25)); 
console.log(canIGetADrivingLicense(18)); 

/*
(10)
*/
function sameLength(str1, str2) {
    return str1.length === str2.length;
}

console.log(sameLength("tree", "clue")); 
console.log(sameLength("tree", "car"));  

/*
(11)
*/
function largerNumber(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(largerNumber(5, 6)); // Output: 6
console.log(largerNumber(5, 3)); // Output: 5


/*
(12)
*/
function smaller(a,b,c){
if (a>b &&a>c)
    return a ; 
else if(b>a && b>c){

    return b ; 
}
else 
{
return c 

}
}

var a = parseInt(window.prompt("plase enter your fisrt number :"));
var b = parseInt(window.prompt("plase enter your Secound number :"));
var c = parseInt(window.prompt("plase enter your third number :"));
window.alert(smaller(a,b,c)) ; 


/*
(13)
*/
function shorterString(str1, str2, str3, str4, str5) {
    let shortest = str1;

    if (str2.length < shortest.length) {
        shortest = str2;
    }
    if (str3.length < shortest.length) {
        shortest = str3;
    }
    if (str4.length < shortest.length) {
        shortest = str4;
    }
    if (str5.length < shortest.length) {
        shortest = str5;
    }

    return shortest;
}


console.log(shorterString("air", "school", "car", "by", "github")); 
console.log(shorterString("air", "tr", "car", "by", "github"));    
console.log(shorterString("by", "tr", "car", "air", "github"));  
console.log(shorterString("air", "by", "car", "school", "github"));


/*
(14)
*/
function longerString(str1, str2, str3, str4) {
    let longest = str1;

    if (str2.length > longest.length) {
        longest = str2;
    }
    if (str3.length > longest.length) {
        longest = str3;
    }
    if (str4.length > longest.length) {
        longest = str4;
    }

    return longest;
}


console.log(longerString("air", "school", "car", "github")); 
console.log(longerString("air", "schoo", "car", "github"));  

/*
(15)
*/

function iseven(s){
if (s %2==0 )
    {
        return true ; 
    }
else{
    return false ; 
}

}

var s = parseInt(window.prompt("plase enter your number : ")) ; 
window.alert(iseven(s)) ; 

/*
(16)
*/
function odd(s){
    if (s %2==1 )
        {
            return true ; 
        }
    else{
        return false ; 
    }
    
    }
    
    var s = parseInt(window.prompt("plase enter your number : ")) ; 
    window.alert(odd(s)) ; 


/*
(17)
*/
function positive(num) {
    if (num < 0) {
        return -num;
    }
    return num;
}


console.log(positive(4));   
console.log(positive(-5));  
console.log(positive(0));   
/*
(18)
*/
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}


console.log(fullName("Adam", "McCallen"));  
console.log(fullName("Alex", "Mercer"));    
/*
(19)
*/
function average(num1, num2, num3, num4, num5) {
    return (num1 + num2 + num3 + num4 + num5) / 5;
}


console.log(average(1, 2, 3, 4, 5));  
console.log(average(5, 7, 9, 3, 5));  




/*
(20)
*/
function randomNumber() {
    return Math.random();
}


console.log(randomNumber());  
console.log(randomNumber()); 

/*
(21)
*/
function randomBetweenNumbers(min, max) {
    return Math.random() * (max - min) + min;
}


console.log(randomBetweenNumbers(1, 8));   
console.log(randomBetweenNumbers(3, 100)); 

/*
(22)
*/
function scoreInUniversity(score) {
    if (score >= 95 && score <= 100) {
        return "A";
    } else if (score >= 85 && score < 95) {
        return "B";
    } else if (score >= 70 && score < 85) {
        return "C";
    } else if (score >= 50 && score < 70) {
        return "D";
    } else {
        return "F";
    }
}


console.log(scoreInUniversity(96));  
console.log(scoreInUniversity(3)); 
console.log(scoreInUniversity(71));  



/*
(23)
*/
let count = 0;

function counter() {
    count++;
    return count;
}


console.log(counter());  // Output: 1

/*
(24)
*/

function resetCounter() {
    let tempCount = count;
    count = 0;
    return tempCount + " and the counter reset now";
}


console.log(counter());  
console.log(counter()); 