import React, { Component } from 'react'
import Salary from './Salary'
import Department from './Department'
import SalaryEmp from './SalaryEmp'

export default class DisplayEmp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // count:1
            count: parseInt(this.props.counter),
            totalsal: (parseInt(this.props.basicsal) + parseInt(this.props.hra) + parseInt(this.props.sa))
        }
    }
    incresecounter = () => {
        // this.state.count++
        // console.log(this.state.count++)
        // alert("Button click")
        this.setState({
            count: this.state.count + 1

        })
    }

    getSal = (total) => {
        console.log(total);
        this.setState({
            totalsal: total
        })

    }

    render() {
        return (
            <div>
                <h3>DisplayEmp Employee</h3>
                <div className="table-responsive">
                    <table className="table table-primary">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.props.id}</td>
                                <td>{this.props.name}</td>
                                <td>{this.props.job}</td>
                                <td>{this.state.totalsal}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* <button type="button" className="btn btn-primary" onClick={this.incresecounter}>Counter</button>
                <p>{this.state.count}</p> */}
                {/* <Salary basic={this.props.basicsal} hra={this.props.hra} sa={this.props.sa}></Salary> */}
                {/* <Department deptno={this.props.deptno} dname={this.props.dname}></Department> */}
                <SalaryEmp basic={this.props.basicsal} hra={this.props.hra} sa={this.props.sa}
                    onchangeSal={this.getSal}></SalaryEmp>
            </div>
        )
    }
}
