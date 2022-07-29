localStorage.setItem('name','shubham')
localStorage.setItem('tank',22);

let impArray=['ball','bat',20,'match']

//To convert arry to 
localStorage.setItem('arr',JSON.stringify(impArray))

let ary=localStorage.getItem('arr');
//ary.slice()
console.log( ary)
let fname =JSON.parse(localStorage.getItem('arr'));
console.log( fname)




let st="Apple,Banana,Kiwi";
console.log(st.slice(6,12));