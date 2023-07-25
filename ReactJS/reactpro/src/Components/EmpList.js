import React from 'react'
import DisplayEmpList from './DisplayEmpList';
export default function EmpList() {
   const names=["smith","john","neha","reha","seema","happy"]
    // const data=names.map((n)=><h3>Names={n}</h3>)

   const employees=[{Id:"101",Name:"Smith",Salary:20000},
                {Id:"102",Name:"Seema",Salary:30000},
                {Id:"103",Name:"Jaya",Salary:25000},
                {Id:"104",Name:"Sushma",Salary:10000},
                {Id:"105",Name:"Rekha",Salary:50000},
                ];
        //   const emplist=employees.map((emp)=><p>Employee ID={emp.Id} ,Name={emp.Name} and Salary={emp.Salary}</p>)

        const emplist=employees.map((emp)=><DisplayEmpList emp={emp} key={emp.Id}></DisplayEmpList>)

  return (
    <div>
        {/* {names.map((n)=><h3>Names={n}</h3>)} */}
        {/* {data} */}
        {emplist}
    </div>
  )
}
