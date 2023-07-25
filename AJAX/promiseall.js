// function getProducts(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve(['product1', 'product2', 'product3', 'product4'])
//         },2000)
//     })
// }
// function getUsers() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("User Promise")
//         }, 2000)
//     })
// }
// Promise.all([getProducts(),getUsers()])
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))

let getProducts=new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(['product1', 'product2', 'product3', 'product4'])
        },2000)
    })
let getUsers=new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("User Promise")
        }, 2000)
    })
Promise.all([getProducts,getUsers])
.then((res)=>console.log(res))
.catch((err)=>console.log(err))