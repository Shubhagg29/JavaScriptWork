let obj={
    "fname":"shubham",
    "age":29,
    "company":"Oracle",
     year:3
}
delete obj.year;
//console.log(obj)

//Object Clonning 
let another=Object.assign({color:'blue'},obj)
//console.log(another)

//Using Spread Operator
const profile={...another}

console.log(profile)
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
//console.log(fruits.get("bananas"))

