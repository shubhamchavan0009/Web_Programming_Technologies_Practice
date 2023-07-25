// import React, { useState } from 'react'

// export default function HookuseState() {
//     const[Count,setCount]=useState(0)
//     const increaseCount=()=>{
//         // alert("Hello")
//         setCount((Count)=>Count+1)
//         setCount((Count)=>Count+5)
//     }
//   return (
//     <div>
//         <p>Count: {Count}</p>
//         {/* <button type="button" class="btn btn-primary me-2" onClick={increaseCount}>Counter</button> */}
//         {/*  OR */}
//         <button type="button" class="btn btn-primary me-2" onClick={()=>setCount(Count+1)}>Counter(add)</button>
//         <button type="button" class="btn btn-primary me-2" onClick={()=>setCount(Count-1)}>Counter(minus)</button>

//         <button type="button" class="btn btn-primary " onClick={increaseCount}>Counter increase by 5</button>
//     </div>
//   )
// }


// import React, { useState } from 'react'

// export default function HookuseState() {
//     const [fullname, setfullname] = useState({ fname: 'Shubham', lname: 'Chavan' })
//     return (
//         <div className='col-5'>
//             <form>
//                 <div class="mb-3">
//                     <label for="" class="form-label">Fname</label>
//                     <input type="text" class="form-control" value={fullname.fname} onChange={(e)=>setfullname({...fullname,fname:e.target.value})}></input>
//                 </div>
//                 <div class="mb-3">
//                     <label for="" class="form-label">lname</label>
//                     <input type="text" class="form-control" value={fullname.lname} onChange={(e)=>setfullname({...fullname,lname:e.target.value})}></input>
//                 </div>
//             </form>
//             FirstName:{fullname.fname} and LastName:{fullname.lname}
//         </div>
//     )
// }


import React from 'react'
import { useState } from 'react'

export default function HookuseState() {
    const[item,setItem]=useState('')
    const[arrData,setArrData]=useState([])

    const changevalue=(event)=>{
        setItem(event.target.value)
    }

    const submit=(e)=>{
       console.log(item);
       e.preventDefault()
       setArrData((prev)=>[...prev,item])
    //    setArrData(()=>item)
    }
  return (
    <div className='col-4'>
        <form onSubmit={submit}>
            <input type='text' className='form-control' onChange={changevalue}></input>
            <button type='submit' className='btn btn-primary mt-2'>AddItem</button>
        </form>
        <h2>Items</h2>
        <ol>
            {arrData.map((data)=><li>{data}</li>)}
        </ol>
    </div>
  )
}

