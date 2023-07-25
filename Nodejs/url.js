const url=require('url')
let address="http://localhost:2000/home?name=ramZ&pwd=123456"
var q=url.parse(address,true)
console.log(q.host)
console.log(q.pathname)
console.log(q.search)
let qdata=q.query
console.log(qdata.name)
console.log(qdata.pwd)














