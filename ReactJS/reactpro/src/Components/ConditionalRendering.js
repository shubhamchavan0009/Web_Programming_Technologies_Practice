import React, { Component } from 'react'

export default class ConditionalRendering extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // isLoggedIn:true  //  if ( this.state.isLoggedIn)
            isLoggedIn: this.props.login
        }
    }
    render() {
        //   if ( this.state.isLoggedIn=='true' ) {
        //     return <>
        //         <h1>Welcome Page</h1>
        //         <h3>Hello Shubham</h3>
        //         </>
        //   }
        //   else{
        //     return <>
        //     <h1>pl login First</h1>
        //     </>
        //   }


       /* let msg;
        if (this.state.isLoggedIn == 'true') {
            msg = <div>
                <h1>Welcome Page</h1>
                <h3>Hello Shubham</h3>
            </div>
        }
        else {
            msg = <h2>Pl login First</h2>
        }
        return <>{msg}</> */

        // return(
        //     this.state.isLoggedIn == 'true'? <> <h1>Welcome Page</h1><h3>Hello Pune</h3></> : <><h2>Pl login First</h2></>
        // )

        return(
            this.state.isLoggedIn == 'true' && <> <h1>Welcome Page</h1><h3>Hello Pune</h3></>
        )
    }
}
