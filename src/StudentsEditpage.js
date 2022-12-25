import { useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import './StudentsEditpage.css';


export function StudentsEditpage({ studentlist }) {
  
  const {firstnme}=useParams()
  const navigate=useNavigate()

  let student=studentlist.filter(x=>{
    return x.firstname==firstnme
  })
 const [firstname,setFirstname]=useState(student[0].firstname)
 const [lastname,setLastname]=useState(student[0].lastname)
 const [standard,setStandard]=useState(student[0].standard)
 const [email,setEmail]=useState(student[0].email)
 const [rollno,setRollno]=useState(student[0].rollno)
 const [address,setAddress]=useState(student[0].address)
 
  return (
    <div className="studentsedit">

      <div className='input-group'>
        <div className='input-group-prepend'><span className='input-group-text'>First Name</span></div>
        <input className="editinput" type={'text'} value={firstname} onChange={(event)=>{setFirstname(event.target.value)}}></input>  
      </div>
      <div className='input-group'>
        <div className='input-group-prepend'><span className='input-group-text'>Last Name</span></div>
        <input className="editinput" type={'text'} value={lastname} onChange={(event)=>{setLastname(event.target.value)}}></input> 
      </div>
      <div className='input-group'>
        <div className='input-group-prepend'><span className='input-group-text'>Standard</span></div>
        <input className="editinput" type={'text'} value={standard} onChange={(event)=>{setStandard(event.target.value)}}></input> 
      </div>
      <div className='input-group'>
        <div className='input-group-prepend'><span className='input-group-text'>Email</span></div>
        <input className="editinput" type={'text'} value={email} onChange={(event)=>{setEmail(event.target.value)}}></input> 
      </div>
      <div className='input-group'>
        <div className='input-group-prepend'><span className='input-group-text'>Roll Number</span></div>
        <input className="editinput" type={'text'} value={rollno} onChange={(event)=>{setRollno(event.target.value)}}></input> 
      </div>
      <div className='input-group'>
        <div className='input-group-prepend'><span className='input-group-text'>Address</span></div>
        <input className="editinput" type={'text'} value={address} onChange={(event)=>{setAddress(event.target.value)}}></input> 
      </div>
      
      
      <button className="btn btn-warning" onClick={()=>{
        student[0].firstname=firstname
        student[0].lastname=lastname
        student[0].standard=standard
        student[0].email=email
        student[0].rollno=rollno
        student[0].address=address
        navigate('/teacher-studentCRUD')
      }}>Update</button>
    </div>
  );
}
