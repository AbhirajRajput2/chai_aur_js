const num1 = 100
console.log(num1)

const num2 = new Number(100)
console.log(num2)

let num3=100
console.log(num3.toString().length)//convert number into string and can perform string operation

let num4=1000000000
console.log(num4.toExponential()) //return exponential form of any number

let num5= 1002.22
console.log(num5.toFixed(4)) //how many value wanna to return after decimal

let num6 = 101.9
console.log(num6.toPrecision(3))

let num7=10000000
console.log(num7.toLocaleString())//US standar
console.log(num7.toLocaleString('en-IN')) //Indian standard

let num8= Number.MAX_VALUE;
let num9= Number.MIN_VALUE;

console.log(num8)
console.log(num9)

//*************************MATHS****************************** */

let num10=-7.1
console.log(Math.abs(num10)) //Negative to positive only
let num11=83.3
console.log(Math.ceil(num11))
console.log(Math.floor(num11))
console.log(Math.round(num11))
console.log(Math.min(1,2,3,4))
console.log(Math.max(1,2,3,4))


//random
console.log(Math.random())
console.log(Math.floor((Math.random()*10)+1))


//suppose range is given
let min=10
let max=20

console.log(Math.floor(Math.random()*(max-min+1) + min)) 
