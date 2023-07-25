const express=require("express")
const app=express()
let PORT=3000

// app.get("/",(req,res)=>{
//     res.send("Hello from express")
// })
// app.get("/home",(req,res)=>{
//     res.send("This is home page")
// })
// app.post("/submit",(req,res)=>{
//     res.send("data submitted")
// })
// app.listen(PORT,()=>console.log(`server started at http://localhost:${PORT}`))


const index=require("./routes/index")
const products=require("./routes/products")
app.use("/",index) // http://localhost:3000
app.use("/products",products) // http://localhost:3000/products
app.listen(PORT,()=>console.log(`server started at http://localhost:${PORT}`))