import React from 'react'

export default function Column() {
    return (
        // <div>
        //     <td>1</td>
        //     <td>2</td>
        //     <td>3</td>
        // </div>
        <React.Fragment>
            <td>1</td>
            <td>2</td>
            <td className='error'>3</td>
            
        </React.Fragment>
    )
}
