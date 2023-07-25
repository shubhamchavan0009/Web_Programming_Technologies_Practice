/* console.log("first")
        function loginuser(email,pwd){
           setTimeout(()=>{
                console.log("Settimeout")
                return {useremail:email ,userpwd:pwd} // {useremail: 'abc@gmail.com', userpwd: 123456 }
           },3000)
        }
        const user=loginuser("abc@gmail.com",123456)
        console.log(user) // {useremail: 'abc@gmail.com', userpwd: 123456 }
        console.log("last") */


console.log("first")
function loginuser(email, pwd, callback) {
    setTimeout(() => {
        console.log("Settimeout")
        callback({ useremail: email, userpwd: pwd }) // {useremail: 'abc@gmail.com', userpwd: 123456 }
    }, 3000)
}

function getUserProducts(email, callback) {
    setTimeout(() => {
        callback(['product1', 'product2', 'product3', 'product4'])
    }, 2000)
}

function getProductDetail(product, callback) {
    setTimeout(() => {
        callback("Title of product") // products[0]
    }, 2000)
}

const userdata = loginuser("abc@gmail.com", 123456, (user) => {
    console.log(user.useremail) // {useremail: 'abc@gmail.com', userpwd: 123456 }
    getUserProducts(user.useremail, (products) => {
        console.log(products)
        getProductDetail(products[0], (details) => { console.log(details) })
    })
})
console.log("last")