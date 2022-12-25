import './TeacherSignup.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


export function TeacherSignup({teacherlist,setTeachetlist}) {

  const navigate=useNavigate();

  const [first_name,setFirstname]=useState('')
  const [last_name,setLastname]=useState('')
  const [user_name,setUsername]=useState('')
  const [pass_word,setPassword]=useState('')
  const [email_,setEmail]=useState('')
  const [address_,setAddress]=useState('')
  const [subject_,setSubject]=useState('')
  const [mobile_no,setMobileno]=useState('')

  return (
    <div>
    <div className='container teachersigncont'>
      <div className='inputs'>
      <div className='txt'>First Name</div>
      <input type={'text'} className='form-control' placeholder='Enter name' onChange={(event)=>{setFirstname(event.target.value)}} ></input>
    </div>
    <div className='inputs'>
      <div className='txt'>Last name</div>
      <input type={'text'} className='form-control' placeholder='Enter name' onChange={(event)=>{setLastname(event.target.value)}} ></input>
    </div>
    <div className='inputs'>
      <div className='txt'>User name</div>
      <input type={'username'} className='form-control' placeholder='User name' onChange={(event)=>{setUsername(event.target.value)}} ></input>
    </div>
    <div className='inputs'>
      <div className='txt'>Password</div>
      <input type={'password'} className='form-control' placeholder='Enter password' onChange={(event)=>{setPassword(event.target.value)}} ></input>
    </div>
    <div className='inputs'>
      <div className='txt'>Email</div>
      <input type={'email'} className='form-control' placeholder='Enter email' onChange={(event)=>{setEmail(event.target.value)}} ></input>
    </div>
    <div className='inputs'>
      <div className='txt'>Address</div>
      <input type={'text'} className='form-control' placeholder='Enter address' onChange={(event)=>{setAddress(event.target.value)}} ></input>
    </div>
    <div className='inputs'>
      <div className='txt'>Subject</div>
      <input type={'text'} className='form-control' placeholder='Enter subject' onChange={(event)=>{setSubject(event.target.value)}} ></input>
    </div>
    <div className='inputs'>
      <div className='txt'>Mobile no.</div>
      <input type='password' className='form-control' placeholder='Enter mobile number' onChange={(event)=>{setMobileno(event.target.value)}} ></input>
    </div>
    </div>
    <div className='signupbtn'>
    <div>
      <button className='btn btn-warning signbtn' onClick={()=>{
        let teacher={
          firstname:first_name,
          lastname:last_name,
          username:user_name,
          password:pass_word,
          email:email_,
          address:address_,
          subject:subject_,
          mobileno:mobile_no
        }
        if(first_name!='' && last_name!='' && user_name!='' && pass_word!='' && email_!='' && address_!='' && subject_!='' && mobile_no!=''){
          setTeachetlist([...teacherlist,teacher])
          navigate(-1)
        }
        else{
          alert("Enter all the fields to sign up")
        }
      }}>Sign up</button>
      </div>
    <div >Already have an account?
      <span><Link to='/teacherpage' className='login'>Log in</Link></span>
      </div>
    </div>
    </div>
  );
}
 