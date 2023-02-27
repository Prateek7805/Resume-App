import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(

  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/:id" element={<App/>}>
      </Route>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
