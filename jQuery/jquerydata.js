// jQuery or $ code
// jQuery(document).ready(function (){
//     alert("Hello from jQuery")
// })

// jQuery(document).ready(()=>{
//     alert("Hello from jQuery")
// })

// function fun(){
//     alert("Hello from jQuery")
// }
// $(document).ready(fun)


$(document).ready(() => {
    $("#btn1").click(() => {
        // alert("Hello from button")
        // $('p').html("filled dynamically")
        // $('p,.mt-2').html("filled dynamically")
        // $('.bg-danger').html("filled dynamically")
        $('.bg-danger').text(pdata)
        $('p').html("<h3>filled dynamically</h3>")

        let pdata=$('p').html() // paragraph data
        // $('.bg-danger').text("Heading Tag")
        
    })

    $('#add').click(()=>{
        let n1=parseInt($('#num1').val())
        let n2=parseInt($('#num2').val())
        // $('#result').html(n1+n2)
        $('#result').html(`Addition= ${n1+n2}`)
    })

    // $('#add').on('click',()=>{
    //     let n1=parseInt($('#num1').val())
    //     let n2=parseInt($('#num2').val())
    //     // $('#result').html(n1+n2)
    //     $('#result').html(`Addition= ${n1+n2}`)
    // })
})










