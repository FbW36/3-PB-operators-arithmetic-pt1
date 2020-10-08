// 0. Declare two variables "snackServings" and "guests" and assign them number values.
let snackServings = 20;
let guests = 10;
let drinks = 10;
let monkeys = 15;
let bananas = 9;
let monkeyfights = 20;

// 1. Add snackServings and guests

console.log(snackServings + guests);
//Try to also subtract snackServings from guests and print the result to the console!

console.log(snackServings - guests);

console.log(guests - snackServings);

// 2. Subtract guests from snackServings. Then, subtract snackServings from guests.
console.log(snackServings - guests);
//3. Multiply snackServings and guests.
console.log(snackServings * guests);
//4. Divide snackServings by guests.
console.log(snackServings / guests);

// 5. Declare another variable "drinks" with value "10". Multiply snackServings and guests. Then, divide the result by drinks. Store the result in a new variable named "resultOne". Print "resultOne" to the console.
let resultOne = (snackServings * guests) / drinks;
console.log(resultOne);

// 5.1 Declare two variables: "monkeys" with value 15, and "bananas" with value 9. Divide monkeys by bananas.
console.log(monkeys / bananas);

// 6. Declare another variable "monkeyfights" with value 20. Add monkeys and bananas, then multiply the result by monkeyfights. Store the result in variable "resultTwo".  Print "resultTwo" to the console.
let resultTwo = (monkeys + bananas) * monkeyfights;
console.log(resultTwo);

// 7. Increment monkeys.
const monkeyPlus = monkeys--;
console.log(monkeyPlus);
// 8. Decrement bananas.
const monkeyLess = monkeys++;
console.log(monkeyLess);

// 9. Subtract monkeys from bananas and store this in a new variable "happiness". Add happiness and monkeyfights.
let happiness = bananas - monkeys;
console.log(happiness);

// 10. Print the remainder when "resultOne" is divided by "resultTwo" to the console.
console.log(resultOne % resultTwo);
