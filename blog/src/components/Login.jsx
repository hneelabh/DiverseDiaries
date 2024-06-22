import React from 'react'

const Login = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-sm'>
        <h2 className='text-2xl font-bold mb-4 text-center'>Login</h2>
        <input 
          type="text" 
          name="Username" 
          placeholder='Username' 
          className='w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500' 
        />
        <input 
          type="password" 
          name="Password" 
          placeholder='Password' 
          className='w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500' 
        />
        <button 
          className='w-full p-3 bg-slate-900 text-white rounded hover:bg-black transition-colors duration-200'
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default Login
