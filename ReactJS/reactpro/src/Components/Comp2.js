import React from 'react'
import { UserConsumer } from './UserContext'
import Comp3 from './Comp3'
export default function Comp2() {
    return (
        <div>
            <Comp3></Comp3>
            {/* <UserConsumer>
                {(v) =><h1> Hello {v}</h1>}
            </UserConsumer> */}
        </div>
    )
}
