// 1.if

// let age=17
// if(age<18){
//     console.log("Not Eligible for voting");
// }

//2.If else

// let age=18
// if(age<18)
// console.log("Not eleigible for voting");
// else
// console.log("Eligible for voting");

//3. If else if else

// let num=-2

// if(num<0)
// console.log("Negative number");
// else if(num>0)
// console.log("Positive number");
// else
// console.log("Number is zero");

// Logical operator

let userloggedin = true;
let useronline = false;

// if(userloggedin&&useronline){
//     console.log("User active");
// }
// else{
//     console.log("not active");
// }

// if (userloggedin || useronline) {
//   console.log("User active");
// } else {
//   console.log("not active");
// }

// if(!userloggedin){
//     console.log("not login");
// }
// else{
//     console.log("logged in");
// }

// ==,<,>,<=,>=,!=,!==

//****************************************** */
//Ternary Opeartor
//Condition?True:False

// let value=18

// value>=18 ?console.log("Eligible for driving"):console.log("not eleibile");

//********************************* */
//Nullish Colespacing Operator (??) ;  Work on null,undefined


//Its main functioning is to check if value is null or undefined it will not assign it and will assign the next value

// let val1;
// val1=5??7
// console.log(val1)  //output will be 5 because it is valid input


// let val2;
// val2=null??undefined??3
// console.log(val2); //Output will be 3 coz null and undefined is not valid input