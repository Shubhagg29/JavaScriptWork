
let max=0;
let cs = document.getElementsByClassName('inventory_item_price');
let arr = [];
cs.forEach(element=>{
    let innerValue = element.innerText.split('$')[1];

    let amount = parseFloat(innerValue)
    console.log(amount)

    if(max<amount){
        max=amount;
    }
});

console.log(max);

setInterval(() => {
    let pop = document.querySelectorAll("#maincounter-wrap > div > span>span")
    pop.forEach(element=>{
       console.log (element.innerText)
    })   
}, 100);



//console.log(Math.max(...arr));











