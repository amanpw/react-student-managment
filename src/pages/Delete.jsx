import axios from 'axios';
import { useState } from 'react';
export default function Delete() {
  const [roll , setRoll] = useState('');
  const [student,setStudent] = useState('');
  const handelSubmit = async (e)=>{
    e.preventDefault();
  const response = await axios.delete(`http://localhost:8080/deleteStudent?roll=${roll}`);
  console.log(response);
  setStudent(response.data);
  }
  return (
    <div>
    <form onSubmit={handelSubmit}>
    <label >ROLL NUMBER :</label>
    <input type="number" name="roll" value={roll} onChange={(e)=>{setRoll(e.target.value)}} />
    <input type="submit" />
    </form>
    
     
      student && (student.data != null){
        <div>
           <h1>Roll : {student.roll}</h1>
           <h3>Studuent Name : {student.name}</h3>
           <h3>Student Branch : {student.branch}</h3>
           <h3>Studnet Yop : {student.yop}</h3>
           <h1>Student cgpa : {student.cgpa}</h1>
           </div>
      }
     

  </div>
   
  )
}
