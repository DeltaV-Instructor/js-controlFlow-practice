'use strict';
console.log('app js file connected.');


//global variable 
// let userPoints = 0;

// alert('hello, and welcome to my guessing game.');

// let user = prompt('What is your name?');
// let userName = user.toLowerCase();
// console.log('lowercase userName', userName);

// //the user variable
// // - string 
// // - null 
// // " " empty string 


// //if the user is empty string or null, keep asking them for their name/
// // while(user === ' ' || user === null){
// //   ask the user again 
// // }


// //shorter version 
// // while(!user){
// //   user = prompt('What is your name?');
// // }


// //Control flow if else 

// // if(condition){..............}
// // if(condition){.....} else {...}
// // if(condition){.....} else if(condition 2) {......} else {......}
// // 
// // if(condition){
// //   alert
// // } else if(condition 2) {
// //   ......
// // } else if(condition 3) {
// //   ......
// // }else {
// //   ......}
// //This is the not equals comparison operator

// if(user !== 'craig'){
//   console.log(user);
//   alert('You are not the Craig we expected.');
// }

// alert('Hello, ' + userName + ' ready to play the game ?');

// let answer = prompt('Is my favorite food popcorn?, Please type yes or no.').toLowerCase();
// console.log(answer);

// //Check user input to add points for the game
// if(answer === 'no' || answer === 'n'){
//   alert('Your right, popcorn is not my favorite.');
//   // userPoints = userPoints + 1;
//   userPoints += 1;
//   console.log('this is the user point total', userPoints);
//  //  userPoints++;
// } else {
//   alert('Popcorn is gross!, you get no points.');
//   console.log('this is the user point total', userPoints);
// }

// How long would it take to print the numbers 0 to 100 using console.log? 
// console.log(0);
// console.log(10);
// console.log(2);
//we can use a loop to run code many times.

console.log("While loops require a starting variable, in this case a variable set to 0");

let count = 0;

console.log("This code will run the loop as long as the variable above is less than or equal to 50");
while(count <= 50){
  console.log('while loop count starts 50: ',count);
     count = count + 2;
}

console.log("While loops need an expression to change the starting variable, in this case we are increasing the value by 5 each time the loop runs");


count = 50;
while(count >= 40) {
  console.log('while loop count starts 50: ', count);
  count = count - 2;
}

// do {here code runs first and always then the condition is checked. }while(condition)
// while loops  will run until a condition is true or truthy, or not true

// while(condition){
//     has to change 
// } 
// let i = 0;
// while(i < value){
   
//    i = i + 1;
// }

// for( setUP;    condition;  change variable;){
//   add code to do stuff
// }

for(let i = 0; i < 10; i++){
  if(i === 2){
    console.log('keep going past this number 2');
    continue;
  }
  if(i === 4){
    console.log('this is now breaking out of the loop.');
    break;
  }
  console.log('the variable i :', i);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// review arrays

var foodsILike = ['tatertots', 'chips', 'popcorn', 'kale'];
console.log(foodsILike);

//use a loop to traverse through an array

for(let x = 0; x < foodsILike.length; x++){
  console.log('for loop doing work ', foodsILike[x]);
 }
// // lots of different array methods.
// foodsILike.push('swiss chard');
// console.log('array push', foodsILike);

// //pop  removes elements 
// var popArrayElement = foodsILike.pop();
// console.log('array after the pop():', foodsILike);
// console.log('array pop', popArrayElement);


// //shift array to remove from the front. 
// var shiftArray = foodsILike.shift();
// console.log('unshift of array first element', shiftArray);
// console.log('shiftArray ', foodsILike);


// // yes, js lets you do this (having an array of different data types). don't do it.
let mixedUpArray = ['yeehaw', 42, true, ['yo'], {}];
// console.log('mixedUpArray ', mixedUpArray);

// // unshift adds elements to the front of the array
// foodsILike.unshift('spinach');
// console.log('unshift', foodsILike);

// // indexOf tells you the index of an element in the array; returns -1 if not found
// let index = foodsILike.indexOf('popcorn');
// console.log(index);
