import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import ClassCom from './Components/ClassCom';
import Employee from './Components/Employee';
import DisplayEmp from './Components/DisplayEmp';
import Table from './Components/Table';
import Image from './assets/Image/C1.jpg'
import ConditionalRendering from './Components/ConditionalRendering';
import EmpList from './Components/EmpList';
import AddEmployee from './Components/AddEmployee';
import Formusingformik from './Components/Formusingformik';
import IncreaseQty from './Components/IncreaseQty';
import Lifecyclemethod from './Components/Lifecyclemethod';
import { render } from 'react-dom';
import Refdemo from './Components/Refdemo';
import { Route, Link, Routes } from "react-router-dom";
import Header from './Components/Header';
import Home from './Components/Home';
import ErrorDemo from './Components/ErrorDemo';
import ErrorBoundary from './Components/ErrorBoundary';
import Comp from './Components/Comp';
import { UserProvider } from './Components/UserContext';
import HookuseState from './Components/HookuseState';
import UserSubmit from './Components/UserSubmit';
import Getusers from './Components/Getusers';
import EditUser from './Components/EditUser';
const styledata = { fontSize: '40px', color: 'brown', border: '1px dashed pink' }

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      //  data:"CDAC"
      data:{
        username:"" ,
        pwd:''
      }
      
    }
  }

  logindetails=()=>{
    this.setState({
      data:{
        username:"Shubham",
        pwd:123456
      }
      
    })
  }

  render() {
    return (
      <div className="container-fluid mt-5">
        {/* <img src={Image}></img> */}
        {/* <img src={require('./assets/Image/C2.jpg')}></img> */}
        {/* <h1 style={{color:'pink',background:'blue'}}>Hello From React</h1> */}
        {/* <p style={styledata}>This is para style</p> */}
        {/* <ClassCom/> */}
        {/* <Employee id="em101" name="Peter" job="Developer"></Employee> */}
        {/* <DisplayEmp id="em101" name="Peter" job="Developer" counter="1"
          basicsal="29000" hra="2000" sa="6000" deptno="10" dname="Sales"></DisplayEmp> */}
        {/* <Table></Table> */}
        {/* <ConditionalRendering login='true'></ConditionalRendering> */}
        {/* <EmpList></EmpList> */}
        {/* <AddEmployee></AddEmployee> */}
        {/* <Formusingformik></Formusingformik>
        <IncreaseQty></IncreaseQty> */}
        {/* <Lifecyclemethod location="Mumbai"></Lifecyclemethod> */}
        {/* <button type='button' className='btn btn-primary' onClick={this.handle}>Destroy Component</button> */}
        {/* <Refdemo></Refdemo> */}
        <Header></Header>
        <br></br>

        {/* <ErrorBoundary>
          <ErrorDemo name="peter"><p>child data</p></ErrorDemo>
        </ErrorBoundary>
        <ErrorBoundary>
          <ErrorDemo name="Smith"></ErrorDemo>
        </ErrorBoundary>
        <ErrorBoundary>
          <ErrorDemo name="Joker"></ErrorDemo>
        </ErrorBoundary> */}
        {/* <UserProvider value={this.state.data}>
          <Comp></Comp>
        </UserProvider>
        <button type="button" class="btn btn-primary" onClick={this.logindetails}>Login</button>
        <br></br><br></br> */}

        {/* <HookuseState></HookuseState> */}

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/lifecycle" element={<Lifecyclemethod />}></Route>
          <Route exact path="/form" element={<Formusingformik />}></Route>
          <Route exact path="/employeelist" element={<EmpList />}></Route>
          <Route exact path="/addemployee" element={<AddEmployee />}></Route>
          <Route exact path="/usersubmit" element={<UserSubmit />}></Route>
          <Route exact path="/users" element={<Getusers />}></Route>
          <Route exact path="/edit/:id" element={<EditUser />}></Route>
        </Routes>
      </div>
    );
  }
}

export default App;