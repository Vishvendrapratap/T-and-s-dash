import { Link } from "react-router-dom";
import './StudentPage.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export function StudentPage({studentlist}) {

  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')

  const navigate=useNavigate()


  return (
    <div>
      <div className="container studentcont">
        <h1>Welcome to the students page</h1>

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
            let student=studentlist.filter(x=>{
              return x.username==username
            })
            if(student!=''){
                if(username==student[0].username && password==student[0].password){
                  navigate(`/studentdashboard/${username}`)
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
        <span><Link to='/studentpage/signup' className='signup'>Sign up</Link></span>
        </div>
        </div>
    </div>
  );
}

