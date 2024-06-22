import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import IndexPage from './components/IndexPage';
import Login from './components/Login';
import SignUp from './components/Signup';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <IndexPage />
          </>
        }/>
        <Route path="/login" element={
          <>
            <Header />
            <Login />
          </>
        }/>
        <Route path="/signup" element={
          <>
            <Header />
            <SignUp />
          </>
        }/>



      </Routes>
    </div>
  );
}

export default App;
