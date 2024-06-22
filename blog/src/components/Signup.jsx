import React, { useState } from 'react'

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const register = (ev) => {
    ev.preventDefault();
    fetch('http://localhost:4000/signup', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'},
    })
  }
  return (
    <form onSubmit={register} className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-sm'>
        <h2 className='text-2xl font-bold mb-4 text-center'>Sign Up</h2>
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
          Sign Up
        </button>
      </div>
    </form>
  )
}

export default SignUp
