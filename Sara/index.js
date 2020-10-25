

let snackServing = 10 ;
let guests = 5 ; 

// 1. Add snackServings and guests.
let snackAndGuests = snackServing + guests
console.log(snackAndGuests) ; // 15

// 2. Subtract guests from snackServings. 
console.log(snackServing - guests) ; // 5
//Then, subtract snackServings from guests.
console.log(guests - snackServing) ; // -5

// 3. Multiply snackServings and guests. 
console.log(guests * snackServing) ; // 50

// 4. Divide snackServings by guests. 
console.log(snackServing / guests) ; // 2

//5. Declare another variable "drinks" with value "10". Multiply snackServings and guests. Then, divide the result by drinks. Store the result in a new variable named "resultOne". Print "resultOne" to the console.
let drinks = 10 ;
let snackAndGuest = snackServing * guests ; 
resultOne = snackAndGuest / drinks ; 
console.log('5 ==>', resultOne) ; // 5

//6. Declare two variables: "monkeys" with value 15, and "bananas" with value 9. 
let monkeys = 15 ; 
let bananas = 9 ; 
//Divide monkeys by bananas.
monkeyDivBananas = monkeys / bananas ; 
console.log('6 ==>', monkeyDivBananas) ; // 1.6666666666666667

// 6. Declare another variable "monkeyfights" with value 20. 
let monkeyFights = 20 ;

//Add monkeys and bananas, then multiply the result by monkeyfights. Store the result in variable "resultTwo".  Print "resultTwo" to the console.
let resultTwo = (monkeys + bananas) * monkeyFights ; 
console.log(resultTwo) ; // 480

//7. Increment monkeys.
m = monkeys++ ; 
console.log(monkeys) ; // 16 

//8. Decrement bananas.
b = bananas-- ; 
console.log(bananas) ; // 8

// 9. Subtract monkeys from bananas and store this in a new variable "happiness". Add happiness and monkeyfights.
let happiness = bananas - monkeys ; 
let resultThree = happiness + monkeyFights ; 
console.log(resultThree) ; // 12

// 10. Print the remainder when "resultOne" is divided by "resultTwo" to the console.
let reminder = resultOne % resultTwo ;
console.log(reminder); // 5







