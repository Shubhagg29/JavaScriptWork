console.log('Destructure')


//Array Destructuring
let colors = ["Violet", "Indigo", "Blue", "Green"];  
// destructuring assignment  
let [a,b,...c] = colors;  
console.log(a);   
console.log(b);   
console.log(c);  

//Object Destructuring
const Address={
    country:'India',
    state: 'M.P',
    city: 'Indore',
    pin:452001,
    parcel :function(){console.log('Deliver to this address')}
}

const {country,state, parcel,...city}=Address
console.log(country,state,parcel,city)
