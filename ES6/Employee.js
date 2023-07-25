import Person from "./classes.js"
import { a ,add,fact as f,sub} from "./data.js"
class Employee extends Person{
    constructor(fname,lname,age,empid,salary){
        super(fname,lname,age)
        this.empid=empid
        this.salary=salary
    }
    display(){
        //super.display()
        return `Firstname=${this.fname} lastname=${this.lname} and age=${this.age} Id=${this.empid} Salary=${this.salary}`
    }
}
let emp=new Employee("Kyle","Watt",35,101,35000)
// console.log(emp.display())

/* named export */

console.log(a)
console.log(add(2,3))
console.log(fact(5))
console.log(f(5))
console.log(sub(5,3))















