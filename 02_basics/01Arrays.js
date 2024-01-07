let myArr1 = [1,2,3,4,5]
let myArr2 = new Array([1,2,3,4,5])

// console.log(myArr1[0])

//Array methods
// 1.push : insert element into array end
// 2. pop : remover element from array end
// 3.unshift : Insert element into start of array (uessd only when required otherwise not recommended as it require shifting of all element one place futher)
// 4.shift : remover element of array from start ( same as unshift used only when required bcoz it will place all rest element one step ahead)

//** unshift and shift good for small array not recommende for large */

// myArr1.push(6)
// myArr1.push(7)
// myArr1.push(8)
// myArr1.push(9)
// myArr1.pop()

// myArr1.unshift(9)
// myArr1.shift()
// console.log(myArr1)

// 5.include : check whether given element is present in array or not
// 6.indexof : provide at which position the given element is present

// console.log(myArr1.includes(1));
// console.log(myArr1.indexOf(4));

// 7. join : creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. 
// only diff in MyArr and newArr is myArr is "Array" and newArr is (String)
// const newArr = myArr1.join()
// console.log(myArr1)
// console.log(newArr)

// slice and splice

//slice: It copy the given index range from array and don't manipulate the original array.
      // It leaves the last inddex Eg; Arr.slice(1,3) it will prin element of index 1,2 and leaves 3
      
//splice: It cut the given index range from array and  manipulate the original array.
      // It didn't the last inddex Eg; Arr.slice(1,3) it will prin element of index 1,2,3
      
let Arr = [1,2,3,4,5]
console.log("Original",Arr)

let NewArr1=Arr.slice(1,3)
console.log(NewArr1)
console.log("Sliced",Arr)

let NewArr2 = Arr.splice(1,3)
console.log(NewArr2);
console.log("Spliced",Arr);