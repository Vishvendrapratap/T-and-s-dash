import { useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import './TeachersEditpage.css'

export function TeachersEditpage({teacherlist}) {

  const {firstnme}=useParams()
  const navigate=useNavigate()

  let teacher=teacherlist.filter(x=>{
    return x.firstname==firstnme
  })
 const [firstname,setFirstname]=useState(teacher[0].firstname)
 const [lastname,setLastname]=useState(teacher[0].lastname)
 const [subject,setSubject]=useState(teacher[0].subject)
 const [email,setEmail]=useState(teacher[0].email)
 const [mobileno,setMobileno]=useState(teacher[0].mobileno)
 const [address,setAddress]=useState(teacher[0].address)
 
  return (
    <div className="teachersedit">
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
        <input className="editinput" type={'text'} value={subject} onChange={(event)=>{setSubject(event.target.value)}}></input> 
      </div>
      <div className='input-group'>
        <div className='input-group-prepend'><span className='input-group-text'>Email</span></div>
        <input className="editinput" type={'text'} value={email} onChange={(event)=>{setEmail(event.target.value)}}></input> 
      </div>
      <div className='input-group'>
        <div className='input-group-prepend'><span className='input-group-text'>Roll Number</span></div>
        <input className="editinput" type={'text'} value={mobileno} onChange={(event)=>{setMobileno(event.target.value)}}></input> 
      </div>
      <div className='input-group'>
        <div className='input-group-prepend'><span className='input-group-text'>Address</span></div>
        <input className="editinput" type={'text'} value={address} onChange={(event)=>{setAddress(event.target.value)}}></input> 
      </div>
      
      <button className="btn btn-warning" onClick={()=>{
        teacher[0].firstname=firstname
        teacher[0].lastname=lastname
        teacher[0].subject=subject
        teacher[0].email=email
        teacher[0].mobileno=mobileno
        teacher[0].address=address
        navigate('/teacher-studentCRUD')
      }}>Update</button>
    </div>
  );
}
