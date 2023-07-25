/* ES7 features async and await */
async function fun() {
    // return "hello" //  return Promise.resolve('hello')
    return Promise.resolve('hello')
}
// console.log(fun())
// fun().then((data)=>console.log(data))

// let data = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Settimeout")
//         resolve(loginuser("abc@gmail.com", "abc"))
//     }, 3000)
// })
// function loginuser(email, pwd) {
//     return ({ useremail: email, userpwd: pwd }) // {useremail: 'abc@gmail.com', userpwd: 123456 }
// }
// async function display() {
//     const user = await data
//     console.log(user)
// }
// display()

function loginuser(email, pwd) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Settimeout")
            resolve({ useremail: email, userpwd: pwd }) // {useremail: 'abc@gmail.com', userpwd: 123456 }
        }, 3000)
    })
}
function getUserProducts(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['product1', 'product2', 'product3', 'product4'])
        }, 2000)
    })

}
function getProductDetail(product) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Title of product") // products[0]
        }, 2000)
    })

}
async function display() {
    try {
        const user = await loginuser("abc@gmail.com", 123456)
        console.log(user)
        const products = await getUserProducts(user.useremail)
        console.log(products)
        const prodetails = await getProductDetail(products[0])
        console.log(prodetails)
    } catch (error) {
        console.log("error")
    }

}
display()
/* Settimeout 
{ useremail: 'abc@gmail.com', userpwd: 123456 } 
[ 'product1', 'product2', 'product3', 'product4' ] 
Title of product */


