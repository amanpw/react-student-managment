import axios from 'axios';
import React, { useState } from 'react';
export default function Update() {
  const [roll , setRoll] = useState('');
  const [name, setName] = useState('');
  const [branch , setBranch]= useState('');
  const [yop , setYop] = useState('');
  const [cgpa , setCgpa] = useState('');

  const handelSubmit = async (e)=>{
    e.preventDefault();
    const employeeData = {roll , name, branch, yop , cgpa };
    const response = await axios.put('http://localhost:8080/updateStudent', employeeData);
    console.log(response);
  }
  return (
    <div>
      <form onSubmit={handelSubmit}>
    <label>ROLL : </label>
    <input type="number" value={roll} name='roll' onChange={(e)=>{setRoll(e.target.value)}}  required />
    <br /> <br />
    <label>NAME : </label>
    <input type="text" value={name} name='name' onChange={ (e)=>{setName(e.target.value)}} required />
    <br /> <br />
    <label>BRANCH : </label>
    <input type="text" value={branch} name='branch' onChange={(e)=>{setBranch(e.target.value)}}  required />
    <br /> <br />
    <label>YOP : </label>
    <input type="number" value={yop} name='yop' onChange={(e)=>{setYop(e.target.value)}}  required />
    <br /> <br />
    <label>CGPA : </label>
    <input type="number" value={cgpa} name='cgpa' onChange={(e)=>{setCgpa(e.target.value)}}  required />
    <br /> <br />
     <input type="submit" />
    </form>
  
    </div>
  )
}
