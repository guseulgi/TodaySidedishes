import React from 'react';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Main from './pages/Main';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Info from './pages/Info';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { useRecoilValue } from 'recoil';
import { isMMenu } from './atom/booleans';
import MMenu from './pages/MMenu';
import AllList from './pages/AllList';
import FoodList from './components/FoodList';
import MyPage from './pages/MyPage';

function App() {
  const isMMenuRow = useRecoilValue(isMMenu);

  return (
    <>
      <Header />
      {isMMenuRow && <MMenu />} {/* <- 모바일 메뉴 특정 크기 이상일 때 사라지게 TODO */}
      <Routes>
        <Route path='/' element={<Main />} >
          <Route path='/:foodId' element={<FoodList />} />
        </Route>
        <Route path='/info' element={<Info />} />
        <Route path='/list' element={<AllList />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/login/signup' element={<Signup />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
