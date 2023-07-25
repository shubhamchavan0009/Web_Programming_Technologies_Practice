const express=require("express")
const router=express.Router()
router.get("/",(req,res)=>{
    // http://localhost:3000/products
    res.send("Hello from product page")
})

module.exports=router