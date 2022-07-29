// let str = 'javascriptloops';
// const vowels='aeiou';
// const consonants ="";
// const a=[];
// const b=[];

// for(let i=0;i<str.length;i++){
//     if(vowels.includes(str[i])){
//        a.push(str[i])
       
//     }
//     else{
//       b.push(str[i])
//     }
// }
// a.forEach(element => {
//     console.log(element)
// });

// b.forEach(element1 => {
//     console.log(element1)
// });


let str1='myworkget&there&issu&n&thereis chance';
//let ab=str1.replace(str1.substring(0,str1.indexOf("&")),"shubham");
let ab=str1.replace(str1.substring(0,str1.indexOf('&')+2),"shubham");
//console.log(str1.substring(1,str1.indexOf("&")))
//get index of  any character Other than first and last
let av=str1.indexOf("&",str1.indexOf('&')+7)

//console.log(av);

const are= [10,4,18,55,6,17,55]
//Find the Second Largest Value in Array
function findSecondLargest(arr) {
    const distinct = [...new Set(arr)];
    console.log(distinct)
    const distinctSorted = distinct.sort((a, b) =>  b-a);
    return distinctSorted[1];
  }

//console.log(findSecondLargest(are))


function startarray(arr){
  let newarr=[];
for (let  ele of arr) {
  if(ele %2 ==0){
    ele *= 2;
  }
  else{
    ele *=3;
  }
  newarr.push(ele)
} 
return newarr
}

let  arey= [1,2,3,4,5,6]
arey.unshift(arey.pop());
//console.log(arey)

let str ='\u2715'
console.log(str.length)