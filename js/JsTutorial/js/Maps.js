console.log('Array Maps Tutorial')
let myMap= new Map();
const key1='mystr',key2={},key3=function() {};
myMap.set(key1, 'shubham');
myMap.set(key2,{
company :'oracle',
desgnation:'SDET',
language: 'JS'
})

myMap.set(key3, function(){
    console.log("learn Map")
});


// Getting the values from a Map 
let value1 = myMap.get(key3);
//console.log(value1);

//Iterating Map using for of
for (let [key,value] of myMap){
   // console.log("Values are ",key, value);
}

for (let keys of myMap.keys()){
   // console.log(`keys are`, keys)
}

//Using ForEach loop
myMap.forEach((value,key)=>{
   // console.log('Key is ', key);
   // console.log('Value is ', value);
})



Array.from(myMap).forEach((key)=>{
    console.log('my key is ', key);
})

//converting map to array
let myArray = Array.from(myMap);
console.log('Map to array is ', myArray);
