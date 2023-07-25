console.log("Hello from nodejs")
// module.exports.add=(a,b)=>a+b
let add=(a,b)=>a+b

// module.exports.a=10
let a=10

let fact=(num)=>{
    let f=1
    for (let i = 1; i <= num; i++) {
        f=f*i
    }
    return f
}
module.exports={add,fact,a}