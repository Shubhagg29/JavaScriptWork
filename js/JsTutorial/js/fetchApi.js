console.log("fetch Api")
let myBtn = document.getElementById("myBtn");
let content = document.getElementById("content");

function getData() {
    url = "https://api.github.com/users";
    fetch(url).then(response => {
        return response.json();
    }).then(data => {

        // data.forEach(element => {
        //    console.log (element.id)
        // });
        console.log(data)
        // console.log(data[1].login)
    })
}
getData();


//If object is sent then need to Use JSon Stringyfy method
//if String is sent as data no need use stringfy method.
function postData() {
    url = "https://reqres.in/api/users";
    data = { "name": "morpheus", "job": "Engineer" }
    params = {
        method: 'post',
        headers: {
            'content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(url, params).then(response => {
        console.log(response)
        return response.json();

    }).then(data => {

        console.log(data)
        console.log("the " + data.id)
    })
}

postData();