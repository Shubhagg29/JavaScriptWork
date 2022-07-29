function getLetter(s) {
    let letter;
   
if(('aeiou').includes(s[0])){
return letter='A'
}
else if(('bcdfg').includes(s[0]))
{
return letter='B'
}
else if(('hjklm').includes (s[0])){
return letter='C'
}
else if(('npqrstvwxyz').includes(s[0])){
return letter='D'
}

//console.log(letter)
    return letter;
    
}
const obj={
    radius:1,
    draw(){
        console.log('logged')
    },
    class:'Jan',
}
//Iterating Object using for-of loop
for (const key of Object.keys(obj)) {
   // console.log(key,obj[key])
}
//Iterating Object using for-of loop
for (const key of Object.entries(obj)) {
  //  console.log(key)
}

//using for- In loop
for (const key in obj) {
  console.log(key,obj[key])
    
  }

if('class' in obj){
   // console.log('Jai ')
}
const arr=[33,45,6,'red']
arr.forEach(key => {
    //console.log(key)
});


function getSecondLargest(nums) {
    let max1 = 0;
    for (const num of nums) {
      if (num > max1) {
        max1 = num;
      }
      
    }
    //console.log(max1)
    let max2 = 0;
   
    for (const num of nums) {
      if (num >max2 && num < max1) {
         max2 = num;
      }
    }   
    return max2;
  }
  let arry= [1,44,6,56,46,55,56,4]
  //console.log(getSecondLargest(arry))