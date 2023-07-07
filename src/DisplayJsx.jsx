import React from 'react'

export default function DisplayJsx() {
    const employees =[
        {EmpId:1,Name:'naufal',Salary:5000},
        {EmpId:2,Name:'firdaus',Salary:4000},
        {EmpId:3,Name:'dian',Salary:6000}
    ]
  return (
    <div>
      <h1>List Employee</h1>
      <ul>
        {
            employees.map((emp)=> {
                return (
                    <li key={emp.EmpId}>
                        {emp.EmpId} - {emp.Name} - {emp.Salary}
                    </li>
                )
            })
        }
      </ul>
    </div>
  )
}
