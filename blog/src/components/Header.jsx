import React from 'react'
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <div className='flex justify-between items-center px-6 py-5 bg-gray-5]50 shadow-lg'>
            <span className='font-bold text-3xl hover:scale-95'>
                <a href="/">Diverse Diaries</a>
            </span>
            <span className='flex gap-8'>
                <a href="/login" className="hover:underline hover:scale-110">Login</a>
                <a href="/signup" className="hover:underline hover:scale-110">SignUp</a>

            </span>

        </div>
    </div>
  )
}

export default Header
