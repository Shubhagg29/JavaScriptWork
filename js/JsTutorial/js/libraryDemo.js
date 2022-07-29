class Library{

     constructor(bookList){
      this.bookList=bookList;
      this.issuedBook={};
      console.log(this.issuedBook)
    }

     getbookList(){
        console.log(this.issuedBook)
      this.bookList.forEach(element => {
          console.log(element)
      });
    }

    issueBook(bookname,user){
        console.log( this.issuedBook)
      if(this.issuedBook[bookname]==undefined){
        this.issuedBook[bookname]=bookname;
        this.user= user;
        console.log(`  ${bookname} is  issued`)
      }
       else{
           console.log(` This ${bookname}  book is already issued`)
       } 
    }


    returnBook(bookname){
        console.log(this.issuedBook[bookname]==`${bookname}`)
        if(this.issuedBook[bookname]==`${bookname}`){
            delete this.issuedBook[bookname];
            console.log(' Book is  returned')
        }
     else{
        
        console.log('Issue book then return')
     }
    }
}