import './StudentSignup.css';
import { Link, useNavigate} from "react-router-dom";
import { useState } from "react";
export function StudentSignup({studentlist,setStudentlist}) {

  const [first_name,setFirstname]=useState('')
  const [last_name,setLastname]=useState('')
  const [user_name,setUsername]=useState('')
  const [pass_word,setPassword]=useState('')
  const [email_,setEmail]=useState('')
  const [address_,setAddress]=useState('')
  const [standard_,setStandard]=useState('')
  const [rollno_,setRollno]=useState('')

  const navigate=useNavigate()
  return (
    <div>
     <div className='container studentsigncont'>
      <div className='inputs'>
      <div className='txt'>First Name</div>
      <input type={'text'} className='form-control Input' placeholder='Enter name' onChange={(event)=>{setFirstname(event.target.value)}}></input>
    </div>
    <div className='inputs'>
      <div className='txt'>Last name</div>
      <input type={'text'} className='form-control Input' placeholder='Enter name' onChange={(event)=>{setLastname(event.target.value)}} ></input>
    </div>
    <div className='inputs'>
      <div className='txt'>User name</div>
      <input type={'username'} className='form-control Input' placeholder='User name' onChange={(event)=>{setUsername(event.target.value)}} ></input>
    </div>
    <div className='inputs'>
      <div className='txt'>Password</div>
      <input type={'password'} className='form-control Input' placeholder='Enter password' onChange={(event)=>{setPassword(event.target.value)}} ></input>
    </div>
    <div className='inputs'>
      <div className='txt'>Email</div>
      <input type={'email'} className='form-control Input' placeholder='Enter email' onChange={(event)=>{setEmail(event.target.value)}} ></input>
    </div>
    <div className='inputs'>
      <div className='txt'>Adress</div>
      <input type={'text'} className='form-control Input' placeholder='Enter adress' onChange={(event)=>{setAddress(event.target.value)}} ></input>
    </div>
    <div className='inputs'>
      <div className='txt'>Standard</div>
      <input type={'text'} className='form-control Input' placeholder='Enter the standard(Class)' onChange={(event)=>{setStandard(event.target.value)}} ></input>
    </div>
    <div className='inputs'>
      <div className='txt'>Roll number</div>
      <input type={'text'} className='form-control Input' placeholder='Enter the roll no.' onChange={(event)=>{setRollno(event.target.value)}} ></input>
    </div>
    </div>
    <div className='signupbtn'>
    <button className='btn btn-warning signbtn' onClick={()=>{
       let student={
        firstname:first_name,
        lastname:last_name,
        username:user_name,
        password:pass_word,
        email:email_,
        address:address_,
        standard:standard_,
        rollno:rollno_
      }
      if(first_name!='' && last_name!='' && user_name!='' && pass_word!='' && email_!='' && address_!='' && standard_!='' && rollno_!=''){
        setStudentlist([...studentlist,student])
        navigate(-1)
      }
      else{
        alert("Enter all the fields to sign up")
      }
    }}>Sign up</button>
    <div >Already have an account?
      <span><Link to='/studentpage' className='login'>Log in</Link></span>
      </div>
    </div>
    </div>
  );
}
