const students=[
    {name: "Raju",subject: "learning"},
    {name: "Babloo",subject: "TP"}
]

function enrollStudents(student,callback) {
    setTimeout(() => {
        students.push(student)
        console.log("Student Enrolled")
        callback();
    }, 3000);
}
function getStudents(){
    setTimeout(() => {
        let str="";
        let studentId= document.getElementById('student');
        students.forEach(ele =>{
           str+=`<li>${ele.name}</li>`
        })
        studentId.innerHTML+=str;
        console.log("Student fetched")
    }, 1000);
    
}
let newStudent= {name:"Sunny",subject:"Python"}
enrollStudents(newStudent,getStudents)
//getStudents();