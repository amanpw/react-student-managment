import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Student Managment System</h1>
      <NavLink to="/Add">Add Student</NavLink>
      <br />   <br />
      <NavLink to="/Update">Update Student</NavLink>
      <br />   <br />
      <NavLink to="/Search">Search Student</NavLink>
      <br />   <br />
      <NavLink to="/Delete">Delete Student</NavLink>
      <br />   <br />
      <NavLink to="/AllStudent">All Student data</NavLink>
    </div>
  )
}
