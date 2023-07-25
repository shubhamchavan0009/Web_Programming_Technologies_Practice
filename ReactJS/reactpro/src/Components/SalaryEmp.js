import React, { Component } from 'react'

export default class SalaryEmp extends Component {
    updateSal = () => {
        let totalsal = parseInt(this.refs.basic.value) + parseInt(this.refs.hra.value) + parseInt(this.refs.sa.value)
        // console.log(totalsal);
        this.props.onchangeSal(totalsal)
    }
    render() {
        return (
            <div>
                <h3>SalaryEmp Component</h3>
                <div className='col-5 mt-2'>
                    <form>
                        <div className='form-group'>
                            <label>Basic</label>
                            <input type='text' className='form-control' defaultValue={this.props.basic} ref="basic"></input>
                        </div>
                        <div className='form-group'>
                            <label>hra</label>
                            <input type='text' className='form-control' defaultValue={this.props.hra} ref="hra"></input>
                        </div>
                        <div className='form-group'>
                            <label>sa</label>
                            <input type='text' className='form-control' defaultValue={this.props.sa} ref="sa"></input>
                        </div>
                        <button type='button' className='btn btn-primary mt-2' onClick={this.updateSal}>Update Salary</button>
                    </form>
                </div>
            </div>
        )
    }
}
