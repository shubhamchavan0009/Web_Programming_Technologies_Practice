const prompt=require("prompt")
prompt.start()

/*
prompt.get(['num1','num2'],(err,result)=>{
    if (err) {
        console.log("error")
    } else {
        console.log(result.num1,result.num2)
    }
}) */

let add=(a,b)=>parseInt(a)+parseInt(b)
prompt.get(['num1','num2'],(err,result)=>{
    if (err) {
        console.log("error")
    } else {
        let sum=add(result.num1,result.num2)
        console.log(sum)
    }
})