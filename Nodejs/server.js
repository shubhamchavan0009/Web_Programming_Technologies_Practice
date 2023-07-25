const http=require('http')
const PORT=1000
/* create a server and take req and return res */
// let server=http.createServer((req,res)=>{
//     res.write("Hello from server")
//     res.write("\nShubham")
//     res.end()
// })

/* listen (start the server) */
// server.listen(PORT,()=>console.log(`server started at http://localhost:${PORT}`))

// http.createServer((req,res)=>{
//     res.write("Hello from server")
//     res.write("\nShubham")
//     res.end()
// }).listen(PORT,()=>console.log(`server started at http://localhost:${PORT}`))

let server=http.createServer()
server.on('request',(req,res)=>{
    res.end("request event")
}).listen(PORT,()=>console.log(`server started at http://localhost:${PORT}`))