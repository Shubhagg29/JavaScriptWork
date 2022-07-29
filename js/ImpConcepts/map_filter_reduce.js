
//js Map

let a= [1,2,3,4,5,7,9,33,66]
let a2= a.map(ele=>{
   return ele +6;
})
//console.log(a2)

//js filter
let a3=a.filter(value=>{
    return value >6;
})
//console.log(a, a3)

//Sort Function
let ar= [1,2,33,5,6]
let a4=ar.sort((a,b)=>{

    return (b- a)
})
//console.log(a4[1])

let a5=ar.reduce((a,b)=>{

    return (b+a)
})
console.log(a5)
