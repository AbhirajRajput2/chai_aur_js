//Basically two type of datatype

//Primitive(pass by value)

// 7 type: String,Number,BigInt,Boolean,null,undefined,Symbol 


//Non primitive (Pass by reference)

// 1.Array
// const arr=["abhiraj","rajput"]

// 2.object

// const myobj=
// {
//     name:abhiraj,
//     address:harda
// }

// 3.Function 
//  const myfunc= function(){
//     console.log("function");
//  }


// **************************************************************

//Type of memory storage

// 1.Stack(Call by value)

// let one =1;
// let two=one;
// two=3;

// console.log(one);
// console.log(two);

//As we can see copy of "one" is passed into "two" so any change made in "two" will not affect the value of "one"

//2.Heap(call by refernce)

// let myobject=
// {
//     name:"Abhiraj",
//     surname:"Rajput"
// }

// let myobject2=myobject

// myobject2.name="Javascript"

// console.log(myobject.name)
// console.log(myobject2.name)

//here "myobject" original is passed into "myobject2" so any change made in "myobject2" will cause effect in "myobject".