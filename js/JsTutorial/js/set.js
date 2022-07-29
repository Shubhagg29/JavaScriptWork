const mySet = new Set();  // Initialize an empty set
console.log('The set looks like :', mySet);

// Adding values to this set
mySet.add('this');
mySet.add('My name');
mySet.add('this');
mySet.add('that');
mySet.add(34);
mySet.add(true);
mySet.add(false);
mySet.add('that2');
console.log('The set looks like this now:', mySet);

//converting set to Array
let newArray = Array.from(mySet);
//console.log(newArray);
newArray.push('winter')
newArray.unshift('winter')
newArray[newArray.length] = 'that2'
console.log(newArray);

//converting Array to Set
let arraySet = new Set(newArray);
console.log(arraySet);



