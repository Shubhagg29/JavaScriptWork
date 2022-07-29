
// let row=document.getElementsByClassName('oj-table-body-row');
// let edit = document.getElementById('fas-collection-container_functional_secondary_fasDelete')
// Array.from(row).forEach(element => {
//     if (element.click()=='true') {

//       edit.classList.remove('oj-disabled')  
//       edit.classList.add('oj-enabled')


//     }
//     else {
//        // edit.classList.remove('oj-enabled')
//         edit.classList.add('oj-disabled') 

//     }
// });


// find maximum value from the cart 

let cs = document.getElementsByClassName('inventory_item_price');

let arr = [];
cs.forEach(element=>{
    let innerValue = element.innerText;
    let val = innerValue.replace("$", "");
    let amount = parseFloat(val)
    arr.push(amount)
}
);

let result = arr.sort((a,b)=>{
    return Math.max(a,b);
});

//console.log(result);

//console.log(Math.max(...arr));



let s ='zhubham'
let as=s.split("");
if(('n','p','q','r','s','t','v','w','x','y','z').includes (s[0])){
    console.log('D')  
    }
else{
    console.log(2)  
}



