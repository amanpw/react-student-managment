import axios from 'axios';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
export default function Add() {
  const [name , setName] = useState('');
  const [branch , setBranch] = useState('');
  const [yop , setYop] = useState('');
  const [cgpa,setCgpa] = useState('');
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const studentData = {name,branch,yop:parseInt(yop),cgpa:parseFloat(cgpa)};
    const response = await axios.post('http://localhost:8080/addStudent', studentData)
    console.log(response);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
       <label> NAME : </label>
       <input type="text" value={name} name='name' onChange={(e)=>{setName(e.target.value)}} required />
      <br /> <br />
      <label> Branch : </label>
       <input type="text" value={branch} name='branch' onChange={(e)=>{setBranch(e.target.value)}} required />
      <br /> <br />
      <label> Yop : </label>
       <input type="number" value={yop} name='yop' onChange={(e)=>{setYop(e.target.value)}} required />
      <br /> <br />
      <label>  CGPA : </label>
       <input type="number" value={cgpa} name='cgpa' onChange={(e)=>{setCgpa(e.target.value)}} required />
      <br /> <br />
       <input type="submit" value="Add Student"  />
       </form>
       <NavLink to='Home' >Back To Home </NavLink>
    </div>
  );
}
