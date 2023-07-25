document.getElementById("btn1").onclick=()=>{
    let div=document.getElementById("div1")
    let btn=document.getElementById("btn1")
    if (div.style.display=='none') {
        div.style.display='inline'
        btn.textContent='Hide Form'
    }
    else{
        div.style.display='none'
        btn.textContent='Show Form'
    }
}