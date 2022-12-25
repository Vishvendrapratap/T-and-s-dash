import { useState } from 'react';
import { useNavigate } from 'react-router';
import './Homepage.css';
export function HomePage({teacherlist,setTeacherlist,studentlist,setStudentlist}) {

  const [show1,setShow1]=useState("none")
  const styles1={
    display:show1
  }

  const [show2,setShow2]=useState("none")
  const styles2={
    display:show2
  }

  const navigate=useNavigate()

  return (
    <div>
      <div className="cards" >
      <card className='card'>
        <div className="card-body">
          <img className='image' src='https://iconarchive.com/download/i103823/custom-icon-design/flatastic-7/Teacher-male.ico' ></img>
        </div>
        <div className="card-footer">
          <button className='btn btn-dark viewteachers' onClick={()=>{
            let dis=show1=="block"?"none":"block"
             setShow1(dis)
          }}>View Teachers</button> 
        </div>
      </card>
      <card className='card' >
        <div className="card-body">
          <img className='image' src='https://png.pngtree.com/png-clipart/20190614/original/pngtree-male-student-vector-icon-png-image_3730885.jpg' width={"300px"}></img>
        </div>
        <div className="card-footer">
        <button className='btn btn-dark viewstudents' onClick={()=>{
            let dis=show2=="block"?"none":"block"
             setShow2(dis)
          }} >View Students</button>
        </div>
      </card>
      </div>

      <div className="teachers" style={styles1}>
           <table className="table table-responsive teachertable">
            <thead>
              <th>S no</th>
              <th>Name</th>
              <th>Subject</th>
              <th>Email</th>
              <th>Mobile no.</th>
              <th>Address</th>
              <th></th>
            </thead>
            <tbody>
              {teacherlist.map((teacher,index)=>(
                <tr key={teacher.id}>
                  <td>{index+1}</td>
                  <td>{teacher.firstname+" "+teacher.lastname}</td>
                  <td>{teacher.subject}</td>
                  <td>{teacher.email}</td>
                  <td>{teacher.mobileno}</td>
                  <td>{teacher.address}</td>
                  <td className='actionbtn'>
                    <button className='btn btn-danger' onClick={()=>{
                      navigate(`/teacher-studentCRUD/viewteachers/${teacher.firstname}`)
                    }}>Edit</button>
                    <button className='btn btn-danger' onClick={()=>{
                       setTeacherlist([...teacherlist.slice(0,index),...teacherlist.slice(index+1,teacherlist.length)])
                    }}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
           </table>
      </div>

      <div className="students" style={styles2}>
      <table className="table table-responsive studenttable">
            <thead>
              <th>S no</th>
              <th>Name</th>
              <th>Standard</th>
              <th>Roll no</th>
              <th>Email</th>
              <th>Address</th>
              <th></th>
            </thead>
            <tbody>
              {studentlist.map((student,index)=>(
                <tr key={student.id}>
                  <td>{index+1}</td>
                  <td>{student.firstname+" "+student.lastname}</td>
                  <td>{student.standard}</td>
                  <td>{student.rollno}</td>
                  <td>{student.email}</td>
                  <td>{student.address}</td>
                  <td className='actionbtn'>
                    <button className='btn btn-danger' onClick={()=>{
                      navigate(`/teacher-studentCRUD/viewstudents/${student.firstname}`)
                    }}>Edit</button>
                    <button className='btn btn-danger' onClick={()=>{
                       setStudentlist([...studentlist.slice(0,index),...studentlist.slice(index+1,studentlist.length)])
                    }}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
           </table>
      </div>

    </div>
  );
}




