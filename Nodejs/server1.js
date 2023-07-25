const http=require('http')
const first=require("./first.js")
const prompt=require('prompt')
const url=require('url')
const PORT=1500
/* create a server and take req and return res */
// let server=http.createServer((req,res)=>{
//     res.write("Hello from server")
//     res.write("\nShubham\n")
//     res.write(first.fact(5).toString())
//     res.end()
// })
/* listen (start the server) */
// server.listen(PORT,()=>console.log(`server started at http://localhost:${PORT}`))

// prompt.start()
// prompt.get(['num'],(err,data)=>{
//     if(err) throw err
//     http.createServer((req,res)=>{
//         res.write(first.fact(data.num).toString())
//         res.end()
//     }).listen(PORT,()=>console.log(`server started at http://localhost:${PORT}`))
// })


let server=http.createServer((req,res)=>{
    // res.write(req.url)
    let q=url.parse(req.url,true)
    if (req.url=="/") {
        res.write("root")
    } else if (q.pathname=="/home") {
        res.write("home page")
    } 
    res.end()
})
server.listen(PORT,()=>console.log(`server started at http://localhost:${PORT}`))
