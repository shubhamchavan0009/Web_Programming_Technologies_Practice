import React from 'react'

export default function DisplayEmpList({emp}) {
  return (
    <div>
        Employee Name={emp.Name} and Salary={emp.Salary}
    </div>
  )
}
