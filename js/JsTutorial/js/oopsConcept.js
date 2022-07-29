//Creating class for Inherritance Concept
class Employee {

    constructor(fname, company, year) {
        this.fname = fname;
        this.company = company;
        this.year = year
    }

    joiningYear(){
return 2022-this.year;
    }
    static add(a, b) {
        return a + b;

    }

}

class Programer extends Employee {
    constructor(fname, company, year, designation) {
        
        super(fname, company, year)
        this.designation = designation;
    }
}
 let employee =new Programer('shubham','oracle',3,'chutiya');
 let employee1 =new Employee('shubham','oracle',3,'bna');

//console.log(employee1);
console.log(employee1);
//Creating class for Inherritance Concept
class Fruit {

    constructor(fruitName) {
        this.fruitName = fruitName;
        
    }
 perimeter(){
    return this.fruitName.reduce( (a,b)=>
    {
        return a+b;
    })
 }

}
let sumFruits= new Fruit([1,2,3])

console.log(sumFruits.perimeter());