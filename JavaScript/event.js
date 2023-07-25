/* onload event */
// alert("Hello")
/* window.onload=function(){
    alert("Hello")
}*/

/* function fun(){
    alert("Hello")
}
window.onload=fun */

function fun(){
    alert("Hello")
}

document.getElementById('btn').onclick=fun /* onclick event */
document.getElementById('btn1')
.ondblclick=function(){  /* ondbclick event */
    let a=parseInt(prompt("Enter a"))
    let b=parseInt(prompt("Enter b"))
    let c=a+b
    //document.write(c)
    //alert(c)
    document.getElementById('data').innerHTML
    ="<h1>"+c+"</h1>"
    // document.getElementById('data').innerText
    // ="<h1>"+c+"</h1>"
}


document.getElementById('add').onclick=function(){
    // let n1=parseInt(document.getElementById('num1').value)
    // let n2=parseInt(document.getElementById('num2').value)
    
    let n1=parseInt(document.frm.num1.value)
    let n2=parseInt(document.frm.num2.value)
    let sum=n1+n2
    document.getElementById('result').innerHTML="Addition= "+sum

    document.getElementById('sum1').value=sum
}

// document.forms['frm']['num1'].value
// document.frm.num1.value