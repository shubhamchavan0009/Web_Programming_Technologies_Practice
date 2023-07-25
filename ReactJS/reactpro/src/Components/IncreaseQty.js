import React, { Component } from 'react'

export default class IncreaseQty extends Component {
    constructor(props) {
      super(props)
    //   this.state = {
    //      count:0
    //   }
        this.inputRef=React.createRef() // created a referance for input control
        this.inputRef1=React.createRef()
        this.inputRef2=React.createRef()
    }

    increase=()=>{
        // this.setState({
        //     count:this.state.count+1
        // })
        this.inputRef.current.value++
    }

    focusInput=()=>{
        this.inputRef1.current.focus()
    }

    componentDidMount(){
      this.inputRef2.current.focus()
    }

  render() {
    return (
      <div>
        {/* <input type='text' value={this.state.count}></input>
        <button onClick={this.increase}>+</button> */}

        <input type='text'ref={this.inputRef} ></input>
        <button onClick={this.increase}>+</button><br></br><br></br>

        <input type='text'ref={this.inputRef1} ></input>
        <button onClick={this.increase}>focus</button><br></br><br></br>

        <input type='text'ref={this.inputRef2}></input>
      </div>
    )
  }
}
