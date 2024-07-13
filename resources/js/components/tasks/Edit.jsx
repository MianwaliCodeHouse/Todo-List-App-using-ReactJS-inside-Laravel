import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Edit = () => {

  // useState variables 
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {userId}=useParams();
  const [user_id, setUserid] = useState(userId);
  // for navigate from this url to another 
  const navigate=useNavigate();

  useEffect(()=>{
    fetchUser()
  },[])

  // fetch single user data 
  const fetchUser=async()=>{
  try {
    
      const response=await axios.get(`/api/showUser/${userId}`);
      
      setUsername(response.data.name)
      setEmail(response.data.email)
      setPassword(response.data.password)
    
  } catch (error) {
    console.log(error)
  }
}

// update user record 
  const updateUser=async(e)=>{
e.preventDefault();
  try {
     const user={
      user_id,
      username,
      email,
      password
     }
      await axios.post(`/api/updateUser/`,user);
      // if user data updated then navigate  to home page
      navigate('/')
    
  } catch (error) {
    console.log(error)
  }
}
  

  return (
    <div className='container'>
      <div className="mt-3">
        <div className="d-flex justify-content-between align-items-center">
          <div className="h2">Edit User {userId}</div>
          <Link to="/" className='btn btn-primary'>Back</Link>
        </div>
      </div>
      <hr />
      <div className="mt-4 card">
        <div className="card-body">
          <div className="h1 text-center mb-4">Update Old User</div>
          <form onSubmit={(e)=>updateUser(e)}>
            
            <input type="text" className='form-control mb-4' onChange={(e)=>setUsername(e.target.value)}  name='name' value={username}  placeholder='Enter Name'/>
            <input type="email" value={email} className='form-control mb-4' onChange={(e)=>setEmail(e.target.value)}  name='email' placeholder='Enter Email'/>
            <input id='showPassword' type="password" value={password} className='form-control mb-4' onChange={(e)=>setPassword(e.target.value)}  name='password' placeholder='Enter Password'/>
            <div className="d-flex justify-content-end">
            <button type='button' onClick={(e)=>showPassword.type='text'} className='btn btn-success '>Show Password</button> 
            </div>
            <input type="submit" value="Update User" className='btn btn-primary btn-lg' />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Edit;
