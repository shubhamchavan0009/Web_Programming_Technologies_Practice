import React, { Component } from 'react'

export default class Lifecyclemethod extends Component {
    constructor(props) {
        console.log("Constructor called");
        super(props)

        this.state = {
            name: "Ram", location: "Pune"
        }
    }

    static getDerivedStateFromProps(props, state) { // bcoz it is static fun -> no this pointer
        console.log("getDerivedStateFromProps called");
        if (props.location !== state.location) {
            return { location: props.location }   // state.location=props.location
        }
        return null
    }


    changeState() {
        this.setState({ name: "Peter" })
    }

    render() {
        console.log("Render called");
        return (
            <div>
                {this.state.name} and {this.state.location}
                <br></br>
                <button onClick={this.changeState.bind(this)} className='btn btn-primary'>Click Me</button>
            </div>
        )
    }

    componentDidMount() { // to do HTTP Calls
        console.log("componentDidMount called");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate called");
        return true
    }

    componentDidUpdate() {
        console.log(" componentDidUpdate called");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount called");
    }

}
