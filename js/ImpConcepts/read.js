let cal=require('./calc')

//{**import fs from 'fs'**}*ES6 way to import
let fs =require('fs')
//const { isDataView } = require('util/types')

result = cal.add(4,5)


result1 =cal.sub(10,6)
console.log(result)
//console.log(result1)


fs.readFile('calc.js','utf8',function(err,data){
    console.log('Reading Done ',data)
})
// fs.writeFile('calc1.js','function mul(a,b){return a*b}',function(err){
// console.log('data done')
// })

// fs.appendFile('calc.js',`function mul(a,b){return a*b}`,function(err){
//     console.log('data done')
//     })


// fs.unlink('calc1.js',function (err) {
//     if (err){
       
//         throw  err;
//     }
//     else{
//     console.log('file delete')
//     }
// })
