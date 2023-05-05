import React, { useEffect } from 'react';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Main from './pages/Main';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Info from './pages/Info';
import Recomand from './pages/Recomand';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Find from './pages/Find';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isMMenu } from './atom/booleans';
import MMenu from './pages/MMenu';

function App() {
  const [isMMenuRow, setIsMMenuRow] = useRecoilState(isMMenu);

  return (
    <>
      <Header />
      {isMMenuRow && <MMenu />} {/* <- 모바일 메뉴 특정 크기 이상일 때 사라지게 TODO */}
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/info' element={<Info />} />
        <Route path='/recomand' element={<Recomand />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/login/signup' element={<Signup />} />
        <Route path='/login/find' element={<Find />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
