let nameerror = false
let generr = false
let hobbyerr = false
let emailerr = false
let moberr = false
let dateerr = false
let cityerr = false
let caperr = false
function checkname() {
    //alert("Hello")
    let uname = document.getElementById("uname").value
    let pattern = /^[a-zA-Z]+$/
    if (uname.length == 0) {
        document.getElementById('msg').
            innerHTML = "Username is requried"
        nameerror = true
    }
    else if (!uname.match(pattern)) {
        document.getElementById('msg').
            innerHTML = "alphabates only"
        nameerror = true
    }
    else {
        document.getElementById('msg').
            innerHTML = ""
        nameerror = false
    }
}

function checkgender() {
    let g = ""
    let gender = document.getElementsByName('gen') // gender[0]=male, gender[1]=female
    if (!gender[0].checked && !gender[1].checked) {
        document.getElementById('msg2').innerHTML = "Please select gender"
        generr = true
    }
    else if (gender[0].checked) {
        g = gender[0].value
        document.getElementById('msg2').innerHTML = g
        generr = false
    }
    else if (gender[1].checked) {
        g = gender[1].value
        document.getElementById('msg2').innerHTML = g
        generr = false
    }
    else {
        document.getElementById('msg2').innerHTML = ""
        generr = false
    }

}

function checkhobby() {
    var hobby = document.getElementsByName('hobby') // hobby[0], hobby[1] ,hobby[2] ,hobby[3]
    let hasch = false
    let chval = ''
    for (let index = 0; index < hobby.length; index++) {
        if (hobby[index].checked == true) {
            chval = chval + hobby[index].value + ' '
            hasch = true
        }
    }
    if (hasch == false) {
        document.getElementById('msg3').innerHTML = "Please select one"
        hobbyerr = true
    }

    else {
        document.getElementById('msg3').innerHTML = chval
        hobbyerr = true
    }
}

function checkemail() {
    let email = document.getElementById("email").value
    let pattern = /^[a-z0-9_.$#]+@[a-z]+.[a-z]{2,3}$/
    // let pattern = /^([a-zA-Z0-9_.\-\#\]+)\@([a-z]+)\.([a-z]{2,3})$/
    if (email.length == 0) {
        document.getElementById('msg1').
            innerHTML = "Email is requried"
        emailerr = true
    }
    else if (!email.match(pattern)) {
        document.getElementById('msg1').
            innerHTML = "Please correct the emali"
        emailerr = true
    }
    else {
        document.getElementById('msg1').
            innerHTML = ""
        emailerr = false
    }

}

function checkmobno() {
    let mob = document.getElementById("mobile").value
    let pattern = /^([0-9]+){10}$/
    if (mob.length == 0) {
        document.getElementById('msg7').
            innerHTML = "Mobile No is requried"
        moberr = true
    }
    else if (!mob.match(pattern)) {
        document.getElementById('msg7').
            innerHTML = "Please check the number"
        moberr = true
    }
    else {
        document.getElementById('msg7').
            innerHTML = ""
        moberr = false
    }
}

function checkdate() {
    let date = document.getElementById('date1').value
    let bdate = date.split("-")
    let today = new Date().getFullYear()
    if (date == '') {
        document.getElementById('msg5').innerHTML = "Please select date"
        dateerr = true
    }
    else if ((today - bdate[0]) < 18) {
        document.getElementById('msg5').innerHTML = "Age should be 18"
        dateerr = true
    }
    else {
        document.getElementById('msg5').innerHTML = " "
        dateerr = false
    }
}

function checkcity() {
    let city = document.getElementById('city').value
    if (city == "select") {
        document.getElementById('msg6').innerHTML = "Please select city"
        document.getElementById('othercity').style.display = "none"
        cityerr = true
    }
    else if (city == "other") {
        let othercity = document.getElementById('othercity')
        othercity.style.display = "inline"
        othercity.focus()
        othercity.onblur = function () {
            if (othercity.value.length == 0) {
                document.getElementById('msg6').innerHTML = "Please select city"
                cityerr = true
            }
            else {
                document.getElementById('msg6').innerHTML = " "
                cityerr = false
            }
        }
    }
    else {
        document.getElementById('msg6').innerHTML = " "
        document.getElementById('othercity').style.display = "none"
        cityerr = false
    }
}

function checkcaptcha() {
    let c1 = removespace(document.getElementById('btn').value)
    let c2 = removespace(document.getElementById('cap').value)
    if (c2.length == 0 || c1 != c2) {
        document.getElementById('msg8').innerHTML = "Invalid Captcha"
        generatecapture()
        caperr = true
    }
    else {
        document.getElementById('msg8').innerHTML = " "
        caperr = false
    }
}

function generatecapture() {
    let a = Math.floor(Math.random() * 10)
    let b = Math.floor(Math.random() * 10)
    let c = Math.floor(Math.random() * 10)
    let d = Math.floor(Math.random() * 10)
    let value1 = a + ' ' + b + ' ' + c + ' ' + d
    document.getElementById('btn').value = value1
}

function removespace(str) {
    return str.split(" ").join("")
}
window.onload = generatecapture


document.getElementById('submit').
    onclick = function ($event) {
        checkname()
        checkgender()
        checkhobby()
        checkemail()
        checkmobno()
        checkdate()
        checkcity()
        checkcaptcha()
        if (nameerror == false && generr == false &&
            hobbyerr == false && emailerr == false &&
            moberr == false && dateerr == false &&
            cityerr == false && caperr == false) {
            alert("data submitted successfully")
        }
        else {
            $event.preventDefault()
        }

    }

