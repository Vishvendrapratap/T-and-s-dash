import { useNavigate, useParams } from 'react-router-dom';
import './TeacherDashboard.css'

export function TeachersDashboard({ teacherlist }) {
  
  const { usernme } = useParams();
  const navigate=useNavigate()

  let teacher = teacherlist.filter(x => {
    return x.username == usernme;
  });

  return (
    <div className='container-fluid teacherdashcont'>
    <div className='logout'><button className='btn btn-secondary logoutbtn' onClick={()=>{navigate('/teacherpage')}}>Log out</button></div>
     <div className='teacherdashboard'>
        <div className='profilepic'>
          <i className="bi bi-person-circle ticon" ></i>
          <div className='tfirstname'>{teacher[0].firstname+" "+teacher[0].lastname}</div>
        </div>
        <div className='teacherInfo'>
          <div className='tinfoItem'>
            <div className='tname'>First name</div>
            <div className='tvalue'>{teacher[0].firstname}</div>
          </div>
          <div className='tinfoItem'>
            <div className='tname'>Last name</div>
            <div className='tvalue'>{teacher[0].lastname}</div>
          </div>
          <div className='tinfoItem'>
            <div className='tname'>Subject</div>
            <div className='tvalue'>{teacher[0].subject}</div>
          </div>
          <div className='tinfoItem'>
            <div className='tname'>Username name</div>
            <div className='tvalue'>{teacher[0].username}</div>
          </div>
          <div className='tinfoItem'>
            <div className='tname'>Email</div>
            <div className='tvalue'>{teacher[0].email}</div>
          </div>
          <div className='tinfoItem'>
            <div className='tname'>Adress</div>
            <div className='tvalue'>{teacher[0].address}</div>
          </div>
          <div className='tinfoItem'>
            <div className='tname'>Mobile no</div>
            <div className='tvalue'>{teacher[0].mobileno}</div>
          </div>
          
        </div>
     </div>
    </div>
  );
}
