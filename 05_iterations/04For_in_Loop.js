// The JavaScript for in statement loops through the properties of an Object:

let myobj={name:"Ram",class:"5th"}

for (const key in myobj) {
    console.log(`Key: ${key} & Value: ${myobj[key]}`)

}

// The JavaScript for in statement can also loop over the properties of an Array:

let myarr=[8,7,6,4,3]

for(const x in myarr){
    console.log(`Index: ${x} & Value: ${myarr[x]}`);
}
