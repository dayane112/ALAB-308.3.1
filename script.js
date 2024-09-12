// Part 1: Fizz Buzz
// To begin, solve the following classic “Fizz Buzz” problem. There are a few 
    // different ways to do this - experiment with what you think is the most efficient. 
    // Once you have solved the problem, ask yourself if there could be another way; and
    // if so, would it be better.
// Accomplish the following:
// Loop through all numbers from 1 to 100.
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

// for(let i = 1; i <= 100; i++){
//     // If a number is divisible by 3, log “Fizz.”
//     if(i <= 100){
//         if(i % 3 == 0 && i % 5 == 0){
//         console.log(`Fizz buzz`)
//         } else if(i % 3 == 0) {
//             console.log(`Fizz`)
//         } else if(i % 5 == 0){
//             console.log(`buzz`)
//         } else{
//             if(i % 3 !== 0 && i % 5 !== 0){
//             console.log(i)
//             }
//         }
//     }
// }



// Write a script that accomplishes the following:
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.


// for(let n = 3; n < 100; n++) {
//     if(n % 2 !== 0 && n % 3 !== 0 && n % 2 == 1) {
//         console.log(n) continue
//     }
    
// }

// let n = 1
// while(n < 100){
//     n++
//     if (6 * n - 1)
//         console.log(n)
// }
//     if (n % 2 !== 0 && n % 3 && n % 5){
//         console.log(n)
//     }
   
// }



// CSV data looks like this:
//     ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,
//     58\n98,Bill,Doctor’s Assistant,26
// Not very nice to look at. The “\n” is an escaped Line Feed, which indicates that the following
// data should begin on a new line, as follows:
// ID,Name,Occupation,Age
// 42,Bruce,Knight,41
// 57,Bob,Fry Cook,19
// 63,Blaine,Quiz Master,58
// 98,Bill,Doctor’s Assistant,26
// As you may have guessed, these values being “comma-separated” means that each comma is
// also a delimiter. This is why this type of data is traditionally viewed in tables. Here
// is how the data looks once fully parsed:


// let cell1 = "42," + "57," + "63," + "98,"
// let cell2 = "Bruce," + "Bob," + "Blaine," + "Bill,"
// let cell3 = "Knight," + "Fry Cook," + "Quiz Master," + "Doctor's Assistant,"
// let cell4 = "41" + "19" + "58" + "26"

// // let ID = "42," + "57," + "63," + "98,"
// // let Name = "Bruce," + "Bob," + "Blaine," + "Bill,"
// // let occupation = "Knight," + "Fry Cook," + "Quiz Master," + "Doctor's Assistant,"
// // let age = "41" + "19" + "58" + "26"

// // console.log(cell1, cell2, cell3, cell4);

// while(let i = 0; i <= cell1.length; i++){
//     if(i = cell1 + cell2 + cell3 + cell4){
//         console.log([i])
//     }
//     }
    

// const cell1 = '42,Bruce,Knight,41\n'
// const cell2 = '57,Bob,Fry Cook,19\n'
// const cell3 = '63,Blaine,Quiz Master,58\n'
// const cell4 = '98,Bill,Doctor’s Assistant,26\n'

// while()){
//     console.log(row)
// }

// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);

let csv = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26'
// let cell1 = '42,Bruce,Knight,41'
// let cell2 = '57,Bob,Fry Cook,19'
// let cell3 = '63,Blaine,Quiz Master,58'
// let cell4 = '98,Bill,Doctor’s Assistant,26'
let cell1 = "42," + "57," + "63," + "98,"
let cell2 = "Bruce," + "Bob," + "Blaine," + "Bill,"
let cell3 = "Knight," + "Fry Cook," + "Quiz Master," + "Doctor's Assistant,"
let cell4 = "41" + "19" + "58" + "26"
let i = 0

while(i < csv.length) {
        i++
     console.log(csv[i]); continue;
} 

// if (i == 0){
//     console.log(split([cell1] [cell2] [cell3] [cell4]))
// }
// split(cell1, cell2, cell3, cell4) 

// {
//     // cell1 == 0 && i < cell2 == 0 && i < cell3 == 0 && i < cell4 == 0){
//     // console.log(cell1 + cell2 + cell3 + cell4)

// }



