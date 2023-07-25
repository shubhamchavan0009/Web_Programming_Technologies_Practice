// fetch("student.json").then(res=>console.log(res))

// fetch("student.json").then(res => { return res.json() })
//     .then((obj) => {
//         console.log(obj)
//         for (let i = 0; i < obj.length; i++) {
//             document.body.innerHTML += `${obj[i].rollno}&emsp;
//             ${obj[i].name}&emsp;${obj[i].age}&emsp;<br>`
//         }
//     })


let getData = async () => {
    const data = await fetch("student.json")
    const obj = await data.json()
    console.log(obj)
    for (let i = 0; i < obj.length; i++) {
        document.body.innerHTML += `${obj[i].rollno}&emsp;
        ${obj[i].name}&emsp;${obj[i].age}&emsp;<br>`
    }
}
getData()