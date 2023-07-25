const http = require('http')
const fs = require('fs')
const PORT = 2000
http.createServer((req, res) => {
    if (req.url == "/") {
        fs.readFile("home.html", "utf-8", (err, data) => {
            if (err) throw err
            res.write(data.toString())
            res.end()
        })
    }
    else if (req.url == "/home") {
        fs.readFile("home1.html", "utf-8", (err, data) => {
            if (err) {
                res.writeHead(404, { 'content-type': 'text/html' })
                res.end("404 Error file not found")
            }
            else {
                res.writeHead(200, { 'content-type': 'text/html' })
                res.write(data.toString())
                res.end()
            }

        })
    }
    else if (req.url == "/about") {
        fs.readFile("about.txt", "utf-8", (err, data) => {
            if (err) throw err
            res.write(data.toString())
            res.end()
        })
    }
}).listen(PORT, () => console.log(`server started at http://localhost:${PORT}`))






