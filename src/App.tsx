import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ctyApi from './api/cityApi';
import LoginPages from './features/auth/pages/LoginPages';
import { AdminLayout } from './commpoents/layout';


function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  useEffect(() => {
    ctyApi.getAll().then(response => console.log(response))
  }, [])
  return (
    <div>
      <h1>Hello</h1>
      <Routes>
        <Route path='/login' element={<LoginPages />} />
        <Route path='/admin' element={<AdminLayout />} />
      </Routes>

    </div>
  );
}

export default App;
