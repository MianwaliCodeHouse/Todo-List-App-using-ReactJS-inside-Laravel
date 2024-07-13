import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Create = () => {
  // useState variables 
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // for nagivating from this url to home url 
  const navigate=useNavigate();


  // create user function in react 
  const createUser=async(e)=>{
    e.preventDefault();
    const task={
      username,
      email,
      password
    }
    try {
      
      await axios.post(`/api/store`,task);
    
      // for navigating this url to home url which is '/'
      navigate('/')
     
     
    } catch (error) {
      console.log(error)
    }
    
  }
  return (
    <div className='container'>
      <div className="mt-3">
        <div className="d-flex justify-content-between align-items-center">
          <div className="h2">Create New User</div>
          <Link to="/" className='btn btn-primary'>Back</Link>
        </div>
      </div>
      <hr />
      <div className="mt-4 card">
        <div className="card-body">
          <div className="h1 text-center">Create New User</div>
          <form onSubmit={(e)=>createUser(e)}>
            <input type="text" className='form-control mb-4' onChange={(e)=>setUsername(e.target.value)}  name='name' placeholder='Enter Name'/>
            <input type="email" className='form-control mb-4' onChange={(e)=>setEmail(e.target.value)}  name='email' placeholder='Enter Email'/>
            <input type="password" className='form-control mb-4' onChange={(e)=>setPassword(e.target.value)}  name='password' placeholder='Enter Password'/>
            <input type="submit" value="Submit" className='btn btn-primary' />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
