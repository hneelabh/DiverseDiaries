import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import IndexPage from './components/IndexPage';
import Login from './components/Login';
import SignUp from './components/Signup';
import { UserContextProvider } from './components/UserContext';
import CreatePost from './components/CreatePost';
import PostPage from './components/PostPage';

const App = () => {
  return (
    <div>
      <UserContextProvider>
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
        <Route path='/create' element={
          <>
            <Header />
            <CreatePost />
          </>
        }/>
        <Route path='/post/:id' element={
          <>
            <Header />
            <PostPage />
          </>
        }/>



      </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
