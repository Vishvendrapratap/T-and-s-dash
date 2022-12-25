import { useNavigate } from "react-router";
import { useParams } from "react-router";
import './StudentDashboard.css';
export function StudentDashboard({studentlist}) {

  const { usernme } = useParams();
  const navigate=useNavigate()
  console.log(usernme)
  let student = studentlist.filter(x => {
    return x.username == usernme;
  });

  return (
    <div className='container-fluid studentdashcont'>
    <div className='logout'><button className='btn btn-secondary logoutbtn' onClick={()=>{navigate(-1)}}>Log out</button></div>
     <div className='studentdashboard'>
        <div className="profilepic">
          <i className="bi bi-person-circle sicon" ></i>
          <div className='sfirstname'>{student[0].firstname+" "+student[0].lastname}</div>
        </div>
        <div className='studentInfo'>
          <div className='sinfoItem'>
            <div className='sname'>First name</div>
            <div className='svalue'>{student[0].firstname}</div>
          </div>
          <div className='sinfoItem'>
            <div className='sname'>Last name</div>
            <div className='svalue'>{student[0].lastname}</div>
          </div>
          <div className='sinfoItem'>
            <div className='sname'>standard</div>
            <div className='svalue'>{student[0].standard}</div>
          </div>
          <div className='sinfoItem'>
            <div className='sname'>Roll number</div>
            <div className='svalue'>{student[0].rollno}</div>
          </div>
          
          <div className='sinfoItem'>
            <div className='sname'>Username</div>
            <div className='svalue'>{student[0].username}</div>
          </div>
          <div className='sinfoItem'>
            <div className='sname'>Email</div>
            <div className='svalue'>{student[0].email}</div>
          </div>
          <div className='sinfoItem'>
            <div className='sname'>Adress</div>
            <div className='svalue'>{student[0].address}</div>
          </div>
        </div>
     </div>
    </div>
  );
}
