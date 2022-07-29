let is_shopOpen= false;

function time(ms){
    return new Promise ((resolve, reject)=>{
        if (is_shopOpen){
            setTimeout(resolve, ms) 
        }
        else{
            reject(console.log('shop is closed'))
        }
    })
}

async function kitchen(){
    try {
       await time (2000) 
       console.log('fruit chopped')
       await time (1000)
       console.log('Ice  added')
       await time (2000)
       console.log('Select the toppings')
       await time (1000)
       console.log('Serve the ice cream ')
    } 
    catch (error){
       console.log('customer left',error) 
    }
    finally{
        console.log('Shop closed, Day ended') 
    }
}
kitchen()