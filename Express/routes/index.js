const express=require("express")
const router=express.Router()
// http://localhost:3000/
router.get("/",(req,res)=>{
    res.send("Hello from index file")
})
// http://localhost:3000/home
router.get("/home",(req,res)=>{
    res.send("This is home page")
})
// http://localhost:3000/submit
router.post("/submit",(req,res)=>{
    res.send("data submitted")
})

// dynamically routing
router.get("/search/:id",(req,res)=>{
    // res.send(req.params)
    res.send(req.params.id)
})
router.get("/search/:id/:name",(req,res)=>{
    res.send(req.params)
    res.send(`${req.params.id} ans ${req.params.name}`)
})
router.get("/regex/:key([0-9]{4})",(req,res)=>{
    res.send(req.params.key)
})
router.get("*",(req,res)=>{
    res.send("URL not found")
})
module.exports=router