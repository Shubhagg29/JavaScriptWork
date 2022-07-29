let arr = [10, 30, 'shu']

for (let i = 0; i < arr.length; i++) {
    // console.log("using loop "+ arr[i])  
}

for (let valueAr of arr) {
    console.log("using of "+ valueAr)
}

for (let valueArt in arr) {
    console.log("using in for index "+ valueArt)
    console.log("using in for "+ arr[valueArt])
}

for (let i = 0; i < 10; i++) {

    if (i === 4) {
        continue;
    }
    //console.log(i)
}


let i = 2
while (i < 10) {


    if (i === 4) {
        continue;
    }
    i++;

}