console.log('postman tech')

// Utility functions:
// 1. Utility function to get DOM element from string
function getElementFromString(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}

// Initialize no of parameters
let addedParamCount = 0;

//Hide parameter box initially
let parametersBox = document.getElementById('parametersBox');
parametersBox.style.display = 'none';

//if user click on parms ,hide jsonbox
let paramsRadio = document.getElementById('paramsRadio');
paramsRadio.addEventListener('click', () => {
    document.getElementById('requestJsonBox').style.display = 'none';
    document.getElementById('parametersBox').style.display = 'block';
   // document.getElementById('params').style.display = 'block';

})

//if user click on json ,hide paramsbox
let jsonRadio = document.getElementById('jsonRadio');
jsonRadio.addEventListener('click', () => {
    document.getElementById('parametersBox').style.display = 'none';
   // document.getElementById('params').style.display = 'none';
    document.getElementById('requestJsonBox').style.display = 'block';
})
//if user clicks on + button add more parameters

let addParam = document.getElementById('addParam');
addParam.addEventListener('click', () => {
    let params = document.getElementById('params');

    let string = `<div class="form-row my-2">
                      <label for="url" class="col-sm-2 col-form-label">Parameter${addedParamCount + 2}</label>
                   <div class="col-md-4">
                      <input type="text" class="form-control" id="parameterKey${addedParamCount + 2}" placeholder="Enter Parameter${addedParamCount + 2} Key">
                   </div>
                 <div class="col-md-4">
                   <input type="text" class="form-control" id="parameterValue${addedParamCount + 2}" placeholder="Enter Parameter ${addedParamCount + 2} Value">
                </div>
              <button class="btn btn-primary deleteParam"> - </button>
            </div>`

    let paramElement = getElementFromString(string);
    params.appendChild(paramElement);
    //Add EventListner to Delete Parameter
    let deleteParam = document.getElementsByClassName('deleteParam');
    for (item of deleteParam) {
        item.addEventListener('click', (e) => {
            e.target.parentElement.remove();
        })
    }


    addedParamCount++;
})

// If the user clicks on submit button
let submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    // Show please wait in the response box to request patience from the user
    document.getElementById('responsePrism').innerHTML = "Please wait.. Fetching response...";
    //document.getElementById('responsePrism').innerHTML = "Please wait.. Fetching response...";

    // Fetch all the values user has entered
    let url = document.getElementById("url").value;
    let requestType = document.querySelector("input[name='requestType']:checked").value;
    let contentType = document.querySelector("input[name='contentType']:checked").value;
    console.log("Url is: ", url)
    console.log("Request  is: ", requestType)
    console.log("Content  is: ", contentType)

    // If user has used params option instead of json, collect all the parameters in an object
    if (contentType == 'params') {
        data = {}
        for (i = 0; i < addedParamCount + 1; i++) {
            if (document.getElementById('parameterKey' + (i + 1)) != undefined) {
                let key = document.getElementById('parameterKey' + (i + 1)).value;
                let value = document.getElementById('parameterValue' + (i + 1)).value;
                data[key] = value;
                console.log(data)
            }
        }
        data = JSON.stringify(data)
    }
    else {
        data = document.getElementById('requestJsonText').value
    }

    console.log("Url is: ", url)
    console.log("Request  is: ", requestType)
    console.log("Content  is: ", contentType)
    console.log("data is: ", data)

    // if the request type is get, invoke fetch api to create a post request

    if (requestType == 'GET') {
        action = {
            method: "GET"
        }
        fetch(url, action)
            .then(response => response.text())
            .then((text) => {
                //document.getElementById('responseJsonText').value = text
                document.getElementById('responsePrism').innerHTML = text
                Prism.highlightAll();
            })
    }

    else{

        para={
            method:'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body:data

        }

        fetch(url,para)
        .then(response=>response.text())
        .then((text)=>{
           // document.getElementById('responseJsonText').value = text
            document.getElementById('responsePrism').innerHTML = text
            Prism.highlightAll();

        })
    }
});