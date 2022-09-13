import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ctyApi from './api/cityApi';
import LoginPages from './features/auth/pages/LoginPages';
import { AdminLayout } from './commpoents/layout';
import { useAppDispatch } from './app/hooks';
import { Button } from '@material-ui/core';
import { authActions } from './features/auth/authSlice';


function App() {

  const dispatch = useAppDispatch()
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  useEffect(() => {
    ctyApi.getAll().then(response => console.log(response))
  }, [])
  return (
    <div>
      <h1>Hello</h1>
      <Button variant='contained' color='primary' onClick={() => dispatch(authActions.logout())}>Logout</Button>
      <Routes>
        <Route path='/login' element={<LoginPages />} />
        <Route path='/admin' element={<AdminLayout />} />
      </Routes>

    </div>
  );
}

export default App;
