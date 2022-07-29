let arr = [10, 20]
//console.log(arr.length)
let arr2 = ["Shubha", 23, true]
arr[arr.length] = 40
console.log(arr[arr.length-1])

const obj = {
    lname: "Gupta",
    marks: 10
}

arr.unshift('sh');
arr.push(arr2)
arr.push(obj)
//console.log(arr[5]["marks"])

//Object with array
let obj2 = {
    fname: "Shubham",
    lname: "Gupta"

}
obj2.place = {
    city: "Indore",
    Country: "India"
}

obj2.marks = [90, 95]
//console.log(obj2.place.city)
console.log(obj2)
//Function inside Object
let myfunction = function fi() {

    console.log("hello Js")
}
//myfunction();

const hobbies = ['play', 'watch', 'travel']

hobbies.push('fly')
//console.log(hobbies)
hobbies[hobbies.length] = 'star'
//console.log(hobbies)
//console.log(hobbies.slice(1,4))
//console.log(hobbies.pop())

//Splice and Slice Method
const fruits = ["Banana", "Orange", "Apple", "Mango"];
//console.log(fruits.)
//fruits.splice(1,2) //removed element at index 1 and 2

//console.log(fruits.splice(1,2))
const fruits1 = ["Banana", "Orange", "Apple",  "Mango"];
//fruits1.slice(1);
//console.log(fruits1.slice(1,4))//takes index n-1
//console.log(fruits1)

//console.log(Array.isArray(fruits1))

const fruits2= fruits1;
//console.log(fruits2)