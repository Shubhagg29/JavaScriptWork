let div1 = document.createElement('div');
let vla = localStorage.getItem('text')
let text = document.createTextNode("Write here");
div1.className = 'content';
div1.id = 'content';
div1.setAttribute('style', 'border:2px solid grey; width: 160px; margin:40px; padding:25px;')
div1.append(text);
console.log(div1.innerText);
//div1.setAttribute('contentEditable','true')
let header = document.getElementsByClassName("one");
header.appendChild(div1)




//First Solution
div1.addEventListener('click', function () {
    document.getElementById('content').setAttribute('contentEditable', 'true')
});

let content =document.getElementById('content');
div1.addEventListener('blur', function () {
   // content.innerHTML = content.value;

    localStorage.setItem("text", document.getElementById("content").innerText);

});
//Second Way for the Solution
// div1.addEventListener('click', function () {
//     let noTextAreas = document.getElementsByClassName('textarea').length;
//     if(noTextAreas ==0){
//     let html = content.innerHTML;
//     div1.innerHTML = ` <textarea class="textarea form-control" id="textarea" rows="3"> ${html}</textarea>`;
//     }


//     //listen for the blur event on textarea
//     let textarea = document.getElementById('textarea');
//     textarea.addEventListener('blur', function() {
//         content.innerHTML = textarea.value;
//         localStorage.setItem('text', textarea.value);
//     })
// });



