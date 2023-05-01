import React from 'react';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Main from './pages/Main';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/login/signup' element={<Signup />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
