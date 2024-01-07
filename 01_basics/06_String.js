let name="Abhiraj"
console.log(name[0])

let fullname = new String("Abhiraj Rajput")
console.log(fullname[0])


console.log(`My name is ${name} and my full name is ${fullname}`)

console.log(fullname.length)//find length of string
console.log(fullname.toUpperCase())//convert into uper case
console.log(fullname.charAt(2))//find character at given index
console.log(fullname.indexOf('A'))//find  index of character


let naam="Abhiraj Rajput From Bandmihuadiya"
console.log(naam.substring(0,4))//used to print part of string

const slicesstr= naam.slice(-3)
console.log(slicesstr) //used to cut string


const newstring = "           Ram        "
console.log(newstring.trim()) //used to erase whitespace and newline

const url="Abhiraj&&RAjput"
const newurl=url.replace("&&"," ") //used to replace anythin in string
console.log(newurl)
console.log(newurl.includes('Abhiraj'))//find whether it is present or not

const namee="Abhiraj-Singh-Rajput"
console.log(namee.split("-")) // COnert string into array