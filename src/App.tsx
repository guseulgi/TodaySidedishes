import React from 'react';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Main from './pages/Main';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Info from './pages/Info';
import Recomand from './pages/Recomand';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/info' element={<Info />} />
        <Route path='/recomand' element={<Recomand />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/login/signup' element={<Signup />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
