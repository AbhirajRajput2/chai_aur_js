let marvel=["Spiderman","moonknight","Thor"]
let dc=["Aquaman","Robin","Superman"]

//try to add element of one array into another

//using "Push" method

// marvel.push(dc)
// console.log(marvel);
// [ 'Spiderman', 'moonknight', 'Thor',   [ 'Aquaman', 'Robin', 'Superman' ] ]  Output

//Problem here is it is not joining them it is putting array into array
//SO "PUSH" MEhtod is not suitable


//Now try "Concat" Method

// let new_marvel= marvel.concat(dc)
// console.log(new_marvel)
// [ 'Spiderman', 'moonknight', 'Thor', 'Aquaman', 'Robin', 'Superman' ] OUTPUT

//Now the work is done but remember concat don't change original array so you have to save new array in other array varible

//Now more simple using "Spread"
// let new_hero=[...marvel, ...dc]
// console.log(new_hero);
//[ 'Spiderman', 'moonknight', 'Thor', 'Aquaman', 'Robin', 'Superman' ] OUPUT


// *****************************************************

//suppose there is array in array and inside array there is another array to simplify these type of array use 
// "flat"

// let mixarr=[1,2,3,[4,5,6],7,[8,[9,10]]]
// const newmixarr=mixarr.flat(Infinity); //here infinity means as deep as possible you can change it to number deep you wanna resolve array. Example; 2 means [[]] ,5 means [[[[[]]]]]
// console.log(newmixarr);

// ***************************************************
// "isArray" check whether given input is array or not

// let arr=[1,2,3,4,5]
// console.log(Array.isArray(arr))  true 


//if you have single input and you wanna convert it into Array use "From"
// console.log(Array.from("Abhiraj"))

// ['A', 'b', 'h','i', 'r', 'a','j']  OUTPUT

//if you havemultiple element and you wanna convert them into arra use "of"

// console.log(Array.of("hii","helllo"))
// [ 'hii', 'helllo' ] OUTPUT