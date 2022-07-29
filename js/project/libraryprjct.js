console.log("check")
//showBooks();


class Book {

    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }

}

class Display {
    add(book) {
        console.log("Adding to UI");
        let tableBody = document.getElementById('tableBody');
        let uiString = `<tr>
                      <td>${book.name}</td>
                      <td>${book.author}</td>
                      <td>${book.type}</td>
                     </tr>`;
        tableBody.innerHTML += uiString;
    }

    clear(book) {


        // let libraryForm = document.getElementById('libraryForm');
        // libraryForm.reset();
        let name = document.getElementById('bookName')
        let author = document.getElementById('author')
        name.value = "";
        author.value = "";
    }

    validate(book){
      if(book.name.length<3 || book.author.length<2)
      {
          return false;
    }
    else{
        return true;
    }
}

show(type,message){
  let msg=  document.getElementById('msg')
  msg.innerHTML=` <div class="alert alert-${type} alert-dismissible Arvind Kumar  3:22 PM
replied to a thread:
Upatch is not working on Gary SB. Error - "Weblet server seems to have crashed!"
Gary SB is unavailable  due to high load .Working on bringing it up show" role="alert">
                     <strong>${type}!</strong> ${message}
                     <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                     <span aria-hidden="true">&times;</span>
                    </button>
                  </div>`

     setTimeout(() => {
        msg.innerHTML= '';           
     }, 2000);
                }

}
// Add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    //console.log("book added");
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    //To get type of Radio button selected
    let typeNodes = document.querySelectorAll(".type");
    Array.from(typeNodes).forEach(element => {
        if (element.checked) {
            type = element.value
        }
    });
     
   let book= new Book(name,author,type)
   display= new Display();
  if (display.validate(book)){

    display.add(book);
    display.clear(book);
    display.show('success','Book added successfully!');
  }
  else{
      display.show('danger','Sorry! You cannot add this book');
  }

    e.preventDefault();
}




// function localStorageBooks() {

//     let name = document.getElementById('bookName').value;
//     let author = document.getElementById('author').value;
//     // To get type of Radio button selected
//     let typeNodes = document.querySelectorAll(".type");
//     Array.from(typeNodes).forEach(element => {
//         if (element.checked) {
//             type = element.value
//         }
//     });
//     let book = new Book(name, author, type);
//    console.log('mybook',book)
//     let notes = localStorage.getItem("notes");
//     if (notes == null) {
//         notesObj = [];
//     } else {
//         notesObj = JSON.parse(notes);
//     }
//     myobj = {
//         name: name,
//         author: author,
//         type: type
//     }
// console.log("objecvalye",myobj)
// notesObj.push(myobj);
//   console.log("NoteObj" + notesObj)
//     localStorage.setItem("notes", JSON.stringify(notesObj));


// }
// function showBooks() {
//     //let book1 = new Book(name, author, type);
   
//     let notes = localStorage.getItem("notes");
//     if (notes == null) {
//         notes = [];
//     } else {
//         notesObj = JSON.parse(notes);
//     }
//     console.log("Note" + notes)
//     let html = "";
    
//     console.log(typeof notesObj)

//     notesObj.forEach(function(element){

//         html = `<tr>
//                   <td>${element.name}</td>
//                   <td>${element.author}</td>
//                   <td>${element.type}</td>
//                 </tr>`;

//     });
//     let tableBody = document.getElementById('tableBody');
//     tableBody.innerHTML += html;
// }
