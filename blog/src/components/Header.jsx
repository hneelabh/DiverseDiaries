// import React, { useContext, useEffect, useState } from 'react'
// import { Link as RouterLink } from 'react-router-dom';
// import { UserContext } from './UserContext';

// const Header = () => {
//   const {setUserInfo, userInfo} = useContext(UserContext);
//   useEffect(() => {
//     fetch('http://localhost:4000/profile', {
//       credentials: 'include'
//     }).then(response => {
//       response.json().then(userInfo => {
//         setUserInfo(userInfo);
//       })
//     })
//   }, [])

// const logout = () => {
//   fetch('http://localhost:4000/logout', {
//     credentials: 'include',
//     method: 'POST',
//   });
//   setUserInfo(null);
// }

// const username = userInfo?.username;

//   return (
//     <div>
//         <div className='flex justify-between items-center px-6 py-5 bg-gray-5]50 shadow-lg'>
//             <span className='font-bold text-3xl hover:scale-95'>
//                 <a href="/">Diverse Diaries</a>
//             </span>
//             <span className='flex gap-8'>
//               {username && (
//                 <>
//                 <a href="/create" className="hover:underline hover:scale-110">Create new post</a>
//                 <a onClick={logout} className="hover:underline hover:scale-110">Logout</a>
//                 </>
//               )}
//               {!username && (
//                 <>
//                 <a href="/login" className="hover:underline hover:scale-110">Login</a>
//                 <a href="/signup" className="hover:underline hover:scale-110">SignUp</a>
//                 </>
//               )}

//             </span>

//         </div>
//     </div>
//   )
// }

// export default Header

import React, { useContext, useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { UserContext } from './UserContext';

const Header = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  const logout = () => {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  };

  const username = userInfo?.username;

  return (
    <div>
      <div className="flex justify-between items-center px-6 py-5 bg-gray-50 shadow-lg">
        <span className="font-poppins text-3xl font-bold hover:scale-95">
          <a href="/">Diverse Diaries</a>
        </span>
        <span className="flex gap-8">
          {username && (
            <>
              <a href="/create" className="hover:underline hover:scale-110">Create new post</a>
              <a onClick={logout} className="hover:underline hover:scale-110 cursor-pointer">Logout</a>
            </>
          )}
          {!username && (
            <>
              <a href="/login" className="hover:underline hover:scale-110">Login</a>
              <a href="/signup" className="hover:underline hover:scale-110">SignUp</a>
            </>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;