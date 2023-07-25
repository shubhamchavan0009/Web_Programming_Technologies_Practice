// let count=1
// let pro=new Promise((resolve, reject) => {
//     // if (count==1) {
//     //     resolve("ok")
//     // }
//     // else{
//     //     reject("Error")
//     // }
// setTimeout(()=>{
//     resolve({user:"abc@gmail.com"})
// },2000)

// })
// pro.then((data)=>{console.log(data)}).catch((err)=>{console.log(err)})

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

/* promise do not write {}
loginuser("abc@gmail.com", 123456)
    .then((user) => {
        console.log(user)
        getUserProducts(user.useremail)
    }).then((products) => {
        console.log(products)
        getProductDetail(products[0])
    }).then((details) => { console.log(details) })
    .catch(()=>{console.log("error")})
*/

/* Settimeout
Title of product */
// loginuser("abc@gmail.com", 123456).then(user=>getUserProducts(user.useremail))
//                                   .then(products=>getProductDetail(products[0]))
//                                   .then((details) => {console.log(details)})
//                                   .catch(()=>console.log("error"))


/* Settimeout
{ useremail: 'abc@gmail.com', userpwd: 123456 }
[ 'product1', 'product2', 'product3', 'product4' ]
Title of product */
loginuser("abc@gmail.com", 123456)
    .then(user => {
        console.log(user)
        return getUserProducts(user.useremail)
    }).then(products => {
        console.log(products)
        return getProductDetail(products[0])
    }).then((details) => {
        console.log(details)
    }).catch(() => console.log("error"))











