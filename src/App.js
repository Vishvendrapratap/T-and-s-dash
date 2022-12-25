import { Routes,Route,Link } from 'react-router-dom';
import { HomePage } from './HomePage';
import { AdminPage } from './AdminPage';
import { TeacherPage } from './TeacherPage';
import { StudentPage } from './StudentPage';
import { TeacherSignup } from './TeacherSignup';
import { StudentSignup } from './StudentSignup';
import { useState } from 'react';
import { TeachersDashboard } from './TeachersDashboard';
import { Pagenotfound } from './Pagenotfound';
import { StudentDashboard } from './StudentDashboard';
import { TeachersEditpage } from './TeachersEditpage';
import { StudentsEditpage } from './StudentsEditpage';


const teachers=[
  {
    firstname:"Suresh",
    lastname:"Kumar",
    username:"sureshkumar123",
    password:"Suresh@123",
    email:"suresh@gmail.com",
    address:"Kukatpally,Hyderadbad",
    subject:"Mathematics",
    mobileno:"9973628363"
  },
  {
    firstname:"Ramesh",
    lastname:"Kumar",
    username:"rameshkumar123",
    password:"Ramesh@123",
    email:"ramesh@gmail.com",
    address:"Miyapur,Hyderadbad",
    subject:"Social Science",
    mobileno:"9919374633"
  }
]

const students=[
  {
    firstname:"Pawan",
    lastname:"Kumar",
    username:"pawan123",
    password:"Pawan@123",
    email:"pawan@gmail.com",
    address:"Dilsukhnagar,Hyderabad",
    standard:"10th Class",
    rollno:221001
  },
  {
    firstname:"Srikanth",
    lastname:"Reddy",
    username:"srikanth123",
    password:"Srikanth@123",
    email:"srikanth@gmail.com",
    address:"Dilsukhnagar,Hyderabad",
    standard:"8th Class",
    rollno:220801
  }
]


function App() {

  const [teacherlist,setTeacherlist]=useState(teachers)
  const [studentlist,setStudentlist]=useState(students)

  return (
    <div>
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <div className='container-fluid'>
          <a className='navbar-brand'>Teachers-Students CRUD</a>
          <button className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#navbarContent' >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarContent'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link to="/teacher-studentCRUD" className='nav-link'>Home</Link>
              </li>
              <li className='nav-item'>
              <Link to="/teacherpage" className='nav-link'>Teacher</Link>
              </li>
              <li className='nav-item'>
              <Link to="/studentpage" className='nav-link'>Student</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path='/teacher-studentCRUD' element={<HomePage teacherlist={teacherlist} setTeacherlist={setTeacherlist} studentlist={studentlist} setStudentlist={setStudentlist} />}/>
        <Route path='/adminpage' element={<AdminPage/>}/>
        <Route path='/teacherpage' element={<TeacherPage teacherlist={teacherlist}/>}/>
        <Route path='/studentpage' element={<StudentPage studentlist={studentlist}/>}/>
        <Route path='/teacherpage/signup' element={<TeacherSignup teacherlist={teacherlist} setTeachetlist={setTeacherlist} />}/>
        <Route path='/studentpage/signup' element={<StudentSignup studentlist={studentlist} setStudentlist={setStudentlist}/>}/>
        <Route path='/teacherdashboard/:usernme' element={<TeachersDashboard teacherlist={teacherlist}/>} />
        <Route path='/studentdashboard/:usernme' element={<StudentDashboard studentlist={studentlist}/>} />
        <Route path='*' element={<Pagenotfound/>} />
        <Route path='/teacher-studentCRUD/viewteachers/:firstnme' element={<TeachersEditpage teacherlist={teacherlist} />} />
        <Route path='/teacher-studentCRUD/viewstudents/:firstnme' element={<StudentsEditpage studentlist={studentlist} />} />
      </Routes>

    </div>
  );
}

export default App;



