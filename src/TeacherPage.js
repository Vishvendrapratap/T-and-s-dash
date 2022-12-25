import './TeacherPage.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
export function TeacherPage({teacherlist}) {

  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')

  const navigate=useNavigate()

  return (
    <div className="container teachercont">

     <h1>Welcome to the teachers page</h1>

      <div className='username'>
        <div className='txt'>Username</div>
      <input type={'text'} className='form-control usernameInput' placeholder='Enter username' onChange={(event)=>{setUsername(event.target.value)}} ></input>
      </div>

      <div className='password'>
        <div className='txt'>Password</div>
      <input type={'password'} className='form-control passwordInput' placeholder='Enter password' onChange={(event)=>{setPassword(event.target.value)}} ></input>
      </div>

      <button className='btn btn-warning loginbtn' onClick={()=>{
       if(username!='' && password!=''){
        let teacher=teacherlist.filter(x=>{
          return x.username==username
        })
        if(teacher!=''){
            if(username==teacher[0].username && password==teacher[0].password){
              navigate(`/teacherdashboard/${username}`)
            }
            else{
              alert("Incorrect password")
            }
          }
        else{
          alert("Username doesn't exist")
        }
       }
       else{
        alert("Enter both the fields to login")
       }
      }}>Login</button>

      <div >Don't have an account?
      <span><Link to='/teacherpage/signup' className='signup'>Sign up</Link></span>
      </div>
    </div>
  );
}


