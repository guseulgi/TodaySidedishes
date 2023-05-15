import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {RecoilRoot} from 'recoil';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

window.Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY);
window.Kakao.isInitialized();

root.render(
  <BrowserRouter>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </BrowserRouter>
);

// reportWebVitals();
