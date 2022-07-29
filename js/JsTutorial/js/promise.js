let promise = new Promise(function (resolve, reject) {
    const x = "geeksforgeeks";
    const y = "geeksforgeeks";
    if (x == y) {
        resolve();
       
    }
    else {
        reject();
    }

});


promise.then(function () {
    console.log('Success, You are a GEEK');
}).catch(function () {
    console.log('Some error has occurred');
});



function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (error) {
                resolve();
            }
            else {
                console.log('Function: Your promise has not been resolved')
                reject('Sorry not fulfilled');
            }

        }, 2000);
    })
}
func1().then(function () {
    console.log("Shubham: Thanks for resolving")
}).catch(function (msg) {
    console.log("Shubham: Very bad bro. Reason: " + msg)
})




const students = [
    { name: "Raju", subject: "learning" },
    { name: "Babloo", subject: "TP" }
]
//Promise Function Example 
function enrollStudents(student) {
    return new Promise(function (resolve, reject) {

        setTimeout(() => {
            students.push(student);
            console.log("Student has been enrolled");
            console.log(students);
            const error = false;

            if (!error) {
                resolve();
            }

            else {
                reject();
            }
        }, 2000);

    })
}

function getStudents() {
    setTimeout(function () {
        console.log("Students have been fetched");
    }, 3000);
}

let newStudent = { name: "Sunny", subject: "Python" }
enrollStudents(newStudent)
.then(getStudents)
.catch(function () {
console.log("Some error occured");
})



function even(num) {
    return new Promise(function (resolve, reject) {

        if (num % 2 == 0) {

            resolve(msg);

        }
        else {

            reject();

        }
    })
}


let number = 25;
even(number,console.log('number selected')).then(function () {
    console.log("this is Even Number " + number)
}).catch(function () {
    console.log("this is not  Even Number " + number)
});
