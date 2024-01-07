//singleton:constructor method
// let myobj= new Object();

//Literal method of constructing objects
// let myobj ={};


//Using Symbol in object is unique from other datatype
let mysym=Symbol("key1")

let myobj={
    name:"Rakesh",
    age:22,
    [mysym]:"Symbol Key",
    email:"rakesh@gmail.com",
    money:2000,
    cities:["Ahemdabad","Bhopal","Indore"]
}

// console.log(myobj.name); //either use "." operator 
// console.log(myobj["name"]);//either use [""] method

//if you declare symbol in object like = mysym:"Symbol  Key" // it is not considered as good syntax
// console.log(myobj.mysym)       
// console.log(typeof myobj.mysym)     

//if you declare symbol in object like = [mysym]:"Symbol  Key" // it is  considered as good syntax
// console.log(myobj[mysym])
// console.log(typeof myobj[mysym])
// console.log(myobj);


//"freeze: if you wanna noone can edit your object"
// myobj.email="Abhiraj@email.com"
// Object.freeze(myobj)
// myobj.email="Abhirajrajput@email.com"
// console.log(myobj.email);

//Adding "Function" in object and using "this" method to give reference to its own value
//An undefined will come in putput also bcoz, when you say "console.log(myobj.greetingtwo());" it is printing desired output by "myobj.greetingtwo()" but when it comes to console.log() it print undefined bcoz your function is not returning anything.

myobj.greeting=function(){
    console.log("Hello JS user");
}

console.log(myobj.greeting())

myobj.greetingtwo = function(){
    console.log(`Hello ${this.name}`);
}
console.log(myobj.greetingtwo());


 