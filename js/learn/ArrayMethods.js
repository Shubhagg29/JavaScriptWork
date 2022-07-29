const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

//Array Filter Method
let constGreater = characters.filter(chs => {
    return chs.mass > 100;

})
console.log(constGreater)

//Array Map Method(Gives array based on the Criteria)

//1 Get Array of All Names 
let nameArray = characters.map(charName => {
    return charName.name

})
//console.log(nameArray)



const moreProp = characters.map(charName => (
    {
        names: charName.name,
        height: charName.height
    }
))

//console.log(moreProp)

//Get First Name 
const firstName = characters.map(fname => {
    return fname.name.split(" ")[0]
})
//console.log(firstName)

//Array Some Method *Atleast one item in array meets the condition*
const blueEye = characters.some(chars => {
    return chars.eye_color === 'blue'
})
//console.log(blueEye)
//Array Sort Method
const byHeight = characters.sort((a, b) => {
    return (a.height - b.height)

})
//console.log(byHeight)

//Sort With Strings


const byName = characters.sort((a, b) => {

    if (a.name < b.name)
        return -1;
    return 1;
})
//console.log(byName)

//Array reduce Method
// to find total Height
const totalHeight = characters.reduce((acc, curr) => {
    return acc + curr.height

}, 0)
//console.log(totalHeight)

// to find eyeColor i.e with String * it will check occurance*  
const eyeColor = characters.reduce((acc, curr) => {
    const color = curr.eye_color;

    if (acc[color]) {
        acc[color] = acc[color] + 1
    }
    else {
        acc[color] = 1
    }
    return acc;
}, {})

//console.log(eyeColor);


const str = "The great physics jump babloo lunch";
const longestWord = () => {
    const strArray = str.split(' ');
    console.log(strArray)  
    const SortedArray = strArray.sort((a, b) => {
            return (b.length- a.length)

        });
      console.log(SortedArray)  

  return SortedArray[0]
}

console.log(longestWord());
