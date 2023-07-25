import React from 'react'

// export default function ChildforReffun() {
//   return (
//     <div>

//     </div>
//   )
// }

const ChildforReffun=React.forwardRef((props,ref)=>{
    return(
        <>
            <input type='text' ref={ref}></input>

        </>
    )
})

export default ChildforReffun