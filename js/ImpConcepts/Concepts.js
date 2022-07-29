let arr=[5,3,6,9]

function  avg(a,b,c){
    return (a+b+c)/3
}

//Spread Operator{...ar} stands for spread operator
//let average = avg(...arr)
let a= [2,8,...arr,55]
//console.log(a)
//Array Conactination

let a2=[1,44,55,99]
let afinal=[...arr,...a2]
//console.log(afinal)

//Spread Operator With Objects
let obj1={
    name1:'shubham',
    favlang:'javascript',
    class1: '10c'
}

    let obj2=   {...obj1,favlang:'Selenium'}
    //console.log(obj2)
    
    let{name1,favlang,class1} = obj1; //Destructuring
   console.log(name1,favlang,class1)