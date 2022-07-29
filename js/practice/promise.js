let is_shopOpen = false;

let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (is_shopOpen) {
            setTimeout(() => {
                resolve(work())
            }, time);

        }
        else {
            reject("Our Shop is closed")
        }

    })

}

order(2000,()=>{
    console.log('fruit has been selected')
})
.then(()=>{
    return order(1000,()=>console.log('Prodcution has started'))
})
.then(()=>{
    return order(1000,()=>console.log('Select the cone'))
})
.then(()=>{
    return order(2000,()=>console.log('Select the topping'))
})
.then(()=>{
    return order(2000,()=>console.log('Serve the ice cream'))
})
.catch(()=>{
    console.log("customer not satisfied")
})
.finally(()=>{
    console.log("Work done finally ")
})