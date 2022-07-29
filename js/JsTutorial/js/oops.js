console.log('learning oops')

let car={
    name: 'tata',
    topSpeed:'100',
    run:function() {
    
        console.log("hello Running")
    }
}

//console.log(car)
//Constructor Creation Simple function
function GeneralCar(name, speed)
{
     this.topSpeed= speed;
     this.name= name;
     this.run=function(){
         console.log(`${this.name} is running`)
     }


}

car1= new GeneralCar('BMW',300)
console.log(car1)

class Employee{
    
   constructor(fname,company,year){
    this.fname= fname;
    this.company=company;
    this.year=year
   }

   static add(a,b){
       return a+b;

   }

}
employee =new Employee('shubham','oracle',3);
console.log(employee)
console.log(Employee.add(5,6))