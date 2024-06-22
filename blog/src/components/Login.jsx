import React, { useState } from 'react'
import {Navigate} from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const login = async (ev) => {
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });
    if(response.ok) {
      setRedirect(true);
    } else {
      alert("Wrong Credentials");
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <form onSubmit={login}
    className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-sm'>
        <h2 className='text-2xl font-bold mb-4 text-center'>Login</h2>
        <input 
          type="text" 
          name="Username" 
          placeholder='Username'
          value={username}
          onChange={ev => setUsername(ev.target.value)}
          className='w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500' 
        />
        <input 
          type="password" 
          name="Password" 
          placeholder='Password' 
          value={password}
          onChange={ev => setPassword(ev.target.value)}
          className='w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500' 
        />
        <button 
          className='w-full p-3 bg-slate-900 text-white rounded hover:bg-black transition-colors duration-200'
        >
          Login
        </button>
      </div>
    </form>
  )
}

export default Login
