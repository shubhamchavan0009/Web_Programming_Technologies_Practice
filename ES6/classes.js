export default class Person{
    constructor(fname,lname,age){
        this.fname=fname
        this.lname=lname
        this.age=age
    }
    get getAge(){return this.age}
    set setAge(i){this.age=i}
    display(){
        return`Firstname=${this.fname} lastname=${this.lname} and age=${this.age}<br>`
    }
}
// export default Person

// class Employee extends Person{
//     constructor(fname,lname,age,empid,salary){
//         super(fname,lname,age)
//         this.empid=empid
//         this.salary=salary
//     }
//     display(){
//         super.display()
//         return `Id=${this.empid} Salary=${this.salary}<br>`
//     }
// }
// let emp=new Employee("Kyle","Watt",35,101,35000)
// document.write(emp.display())
// document.write(emp.fname+"<br>")




// let p=new Person("Annie","butcher",20)
// document.write(p.fname+"<br>")
// document.write(p.display())
// document.write(p.getAge+"<br>")
// p.setAge=30
// document.write(p.getAge+"<br>")
// document.write(p.display())


















