import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'



const Tasks = () => {
  const imageUrl = '/upload/image.png';
  // get users data and save it into this state variable hook 
  const [users, setUsers] = useState([]);
  // set page state variable for  pagination 
  const [page, setPage] = useState(1);

  // useEffect mostly use when we want to run something in loop 
  useEffect(() => {
    fetchUsers();
  }, [page]);

  // get all users according to page number data from laravel api route 
  const fetchUsers = async()=>{
    try {
      const response=await axios.get(`/api/showAll?page=${page}`)
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  // testing runAlert function in react  
  const runAlert=()=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }


  // delete user record function 
  const deleteUser = (userId)=>{
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          const runDeleteProcess= async()=>{
            // axios work only in async function 
           await axios.delete(`http://127.0.0.1:8000/api/delete/${userId}`)
          fetchUsers();
          }
          
          Swal.fire({
            title: "Deleted!",
            text: "User has been deleted.",
            icon: "success"
          });
          runDeleteProcess();
        }
      });
      
    } catch (error) {
      console.log(error);
    }
  };


  // pagination code 
  const fetchNextPrePage=(link)=>{
    const url=new URL(link);
  
    setPage(url.searchParams.get('page'));
  
      fetchUsers();
    
    
  }
  const rendarPagination=()=>(
    <ul className='pagination'>
      {
        users.links?.map((link,index)=>(
          <li key={index} style={{ cursor:'pointer' }} onClick={()=>fetchNextPrePage(link.url)} className={`page-item ${link.active ? 'active' : ''}`}>
            <a className='page-link'>{link.label.replace('&laquo;','').replace('&raquo;','')}</a>
          </li>
        ))
      }
    </ul>
  )
  return (
    <div className='container'>
      <div className="mt-3">
        <div className="d-flex justify-content-between align-items-center">
          <div className="h2"><img src="upload/image.png" alt="Task Image" width="50px" />Display Users </div>
          <Link to="/create" className='ms-3 btn btn-primary'>Add User</Link>
        </div>
      </div>
      <hr />
      <div className="table-responsive mt-4">
        <table className="table table-striped">
          <thead className='table-dark'>
            <tr>
            
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Created At</th>
            <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              users.data?.map(user=>(
<tr class="vertical-align-middle">
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.created_at}</td>
              <td>
                <Link to={`/edit/${user.id}`} className='btn btn-success m-2'>Edit</Link>
                <button onClick={()=>deleteUser(user.id)} className='btn btn-danger m-2'>Delete</button>
              </td>
            </tr>
              ))
            }
            
          </tbody>
        </table>
        <div className="my-4 d-flex justify-content-between align-items-center">
          <div className="">
            Showing { users.from || 0 } to {users.to || 0} from {users.total}
          </div>
          <div className="">
            {rendarPagination()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
