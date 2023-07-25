const events=require("events")
const eventEmitter= new events.EventEmitter()

// event name and handler
eventEmitter.on('shubham',()=>{
    console.log("event fired")
})
eventEmitter.on('shubham',(email,pwd)=>{
    console.log(`event fired ${email} ${pwd}`)
})
eventEmitter.emit('shubham')
eventEmitter.emit('shubham',"abc@gmail.com",123456)