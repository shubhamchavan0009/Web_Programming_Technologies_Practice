/* 1 using object literal */
// let Person={fname:"Shubham",lname:"Chavan",age:25,passport:{pnum:"PST001",code:"IN"}}
// document.write(Person.fname)
// document.write(Person['fname'])

/* 2 using new keyword */
// let Person=new Object()
// Person.fname="Shubham"
// Person.age=25
// Person.city="Sangli"
// document.write(Person.fname+"<br>")

// let x=Person
// x.fname="Rohit"
// document.write(Person.fname+"<br>")
// document.write(x.fname+"<br>")

/* foe in loop */
// for (let p in Person) {
//     // document.write(p+"<br>")
//     document.write(`${p}:${Person[p]}<br>`)
// }

/* add new property */
// Person.city="Pune"
// for (let p in Person) {
//     // document.write(p+"<br>")
//     document.write(`${p}:${Person[p]}<br>`)
// }

/* delete property */
// delete Person.age
// for (let p in Person) {
//     // document.write(p+"<br>")
//     document.write(`${p}:${Person[p]}<br>`)
// }

// document.write(Person.passport.code)

/* function and this pointer */
// let Person={fname:"Shubham",lname:"Chavan",age:25,
// getFullName:function(){
//     return this.fname+" "+this.lname
// }}

// document.write(Person.getFullName())


// let Person=new Object()
// Person.fname="Shubham"
// Person.lname="Chavan"
// Person.age=25
// Person.city="Sangli"
// Person.getFullName=function(){
//     return this.fname+" "+this.lname
// }

// document.write(Person.getFullName())

/* 3 using constructor */
// function Student() {
//     this.fname = "Shubham"
//     this.lname = "Chavan"
//     this.age = 25
//     this.city = "Mumbai"
//     this.getDetails = function () {
//         return `fname=${this.fname} lname=${this.lname} 
//         age=${this.age} and city=${this.city}<br>`
//     }
// }

function Student(fn, ln, a, c) {
    this.fname = fn
    this.lname = ln
    this.age = a
    this.city = c
    this.getDetails = function () {
        return `fname=${this.fname} lname=${this.lname} 
        age=${this.age} and city=${this.city}<br>`
    }
}

// let st=new Student("Ram","shrma",20,"Jaipur")
// let st1=new Student("Rekha","Atal",40,"Mumbai")
// document.write(st.getDetails())
// document.write(st1.getDetails())
// document.write(st1.fname)

// document.getElementById('obj').onclick=function(){
//     alert("Hello")
// }

/* Add new property and function */
Student.prototype.course = "PGDAC"
Student.prototype.getCourse = function () { return this.course }

// let obj = new Student()
// document.write(obj.getDetails())

document.getElementById('obj').onclick = function () {
    let fname = document.getElementById('fname').value
    let lname = document.getElementById('lname').value
    let age = document.getElementById('age').value
    let city = document.getElementById('city').value
    let Studentobj = new Student(fname, lname, age, city)
    document.getElementById('data').innerHTML = Studentobj.
        getDetails() + " " + Studentobj.course + " " + Studentobj.getCourse()
}



