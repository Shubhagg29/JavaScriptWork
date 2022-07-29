let assert = require('assert')

function aboveTen(numbers) {
   return numbers.filter(number=>{
        return number >=10
    })
}
//console.log(aboveTen[10,4,6,71,18])

let fname = "chai"
assert(50<60,"Expected")