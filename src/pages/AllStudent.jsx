import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
export default function AllStudent() {
  const [student , setStudent] = useState([]);
  useEffect(() => {
    const fetchStudent = async () => {
        const response = await axios.get('http://localhost:8080/getAllStudent');
        setStudent(response.data);
    };
    fetchStudent();
  }, []);
  return (
    <div>
      <h3>All Employees</h3>
      {student.length === 0 ? (
        <p>No employees available.</p>
      ) : (
        student.map((students, index) => (
          <div key={index}>
            <h4>{students.name}</h4>
            <p>Salary: {students.branch}</p>
            <p>Assets: {students.yop}</p>
            <p>Assets: {students.cgpa}</p>
            
          </div>
        ))
      )}
      <NavLink to="/Home">Back To Home </NavLink>
    </div>
  );
}
