import { useFormik } from 'formik'
import React from 'react'
const validateEmployee=(empData)=>{
    const errors={}
    let pattern=/^([a-zA-Z]+)$/
    if (! empData.Name) {
        errors.Name="Name is required"
    }
    else if (!pattern.test(empData.Name)) {
        errors.Name="Alphabets only"
    }
    if (empData.Salary.length==0) {
        errors.Salary="Salary is required"
    } 
    else if (isNaN(empData.Salary)) {
        errors.Salary="Salary should be number only"
    }
    return errors
}

export default function Formusingformik() {
    const formik=useFormik({
        initialValues:{Id:'',Name:'',Email:'',Salary:''} ,
        validate:validateEmployee,
        onSubmit:(values)=>{alert(JSON.stringify(values))}
    })
  return (
    <div>
        <h1>Add Employee Using Formik</h1>
        <form onSubmit={formik.handleSubmit}>
            <div className='form-group col-6'>
                <label>Employee ID</label>
                <input type='text' name='Id' className='form-control' value={formik.values.Id}
                onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
            </div>
            <div className='form-group col-6'>
                <label>Employee Name</label>
                <input type='text' name='Name' className='form-control'  value={formik.values.Name}
                onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                {formik.touched.Name && formik.errors.Name?<span className='text-danger'>{formik.errors.Name}</span> : null}
            </div>
            <div className='form-group col-6'>
                <label>Employee Email</label>
                <input type='text' name='Email' className='form-control'  value={formik.values.Email}
                onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
            </div>
            <div className='form-group col-6'>
                <label>Employee Salary</label>
                <input type='text' name='Salary' className='form-control'  value={formik.values.Salary}
                onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                 {formik.errors.Salary?<span className='text-danger'>{formik.errors.Salary}</span> : null}
            </div>
            <button className='btn btn-primary mt-2' >Add Employee</button>
        </form>
      </div>
  )
}
