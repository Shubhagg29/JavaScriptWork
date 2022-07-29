function sum(a, b) {
    let c = a + b;
    return (c);
}
console.log(sum(20, 30));

setTimeout(function () {
    console.log("hey !!Rock");
}, 1000);


setTimeout(() => console.log("They Talk!!"), 1000);



let kit = 
{
    name: "match", 
    car : "ball",
    iscorrect:true,
    player: 11,
    2:"eye",
   "+work": "ok"

};
console.log(kit);

function testArray() {
    let cookie = ["browine", "chocolate chip", "oreo",2];
    cookie.push("pineapple");
    console.log(cookie)
}


function verifystatements() {
    var cap = 1;
    if (cap == 1) console.log("There is it  ");
    else console.log("There is not");

    var cap = "cool";
    var wea = cap === "cool" ? console.log("There is very cold")
        : console.log("There is very hot");
}

//window.setTimeout(testArray,3000);

verifystatements();
testArray();