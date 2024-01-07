// console.log(2<2);
// console.log(2>2);
// console.log(2==2);
// console.log(2<=2);
// console.log(2>=2);


// Always try to only compare same data type value it will provide right answer, otherwise js will try to change datatpype dynamically and it can provide strange output 

console.log("2" > 1);
console.log(2 > "1");

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

//What happening here is "==" and "<,>" operator work differently when "<,>" operator is used js will convert null into number so in case of (null >= 0) null is converted into 0 due to ">" and due to "=" it will match with 0 and output will be "true" but in other two cases output will be "false"

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined <= 0);

//it will always guve "false"


console.log("2"===2) //false

// "===" strict check will always check is dataty[e of all value is same then only it will check values

console.log("2" +1 +2) //212
console.log(1+ 2+ "2")  //32

//Sometime outiput will confuse you just like these above two so working of such values is also defined in ecma docs. but it is suggest to use proper ecpression with brackets etc.

