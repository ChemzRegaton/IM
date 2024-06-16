import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SignUp, Login, Homepage, Patients, Wards, Staffs } from './pages';
import './pages/styles.css';


const App = () => {
  const [token, setToken] = useState(false);

  useEffect(() => {
    const savedToken = sessionStorage.getItem('token');
    if (savedToken) {
      setToken(JSON.parse(savedToken));
    }
  }, []);

  useEffect(() => {
    if (token) {
      sessionStorage.setItem('token', JSON.stringify(token));
    }
  }, [token]);

  return (
    <div>
      <div className='content' style={{ marginTop: token ? '80px' : '0px' }}>
        <Routes>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/' element={<Login setToken={setToken} />} />
          {token && (
            <>
              <Route path='/homepage' element={
                <>
                  <nav className='nav'>
                    <p className='dashboard'>Welcome! {token.user.user_metadata.full_name}</p>
                    <ul>
                      <li><a href='/homepage' className='homepage'>Home</a></li>
                      <li><a href='/patients' className='patients'>Patients</a></li>
                      <li><a href='/wards' className='wards'>Wards</a></li>
                      <li><a href='/staffs' className='staffs'>Staffs</a></li>
                      <li><a href='/' className='signout'>| Sign Out |</a></li>
                    </ul>
                  </nav>
                  <Homepage token={token} />
                </>
              } />
              <Route path='/patients' element={
                <>
                  <nav className='nav'>
                    <p className='dashboard'>WELLMEADOWS</p>
                    <ul>
                      <li><a href='/homepage' className='homepage'>Home</a></li>
                      <li><a href='/patients' className='patients'>Patients</a></li>
                      <li><a href='/wards' className='wards'>Wards</a></li>
                      <li><a href='/staffs' className='staffs'>Staffs</a></li>
                      <li><a href='/' className='signout'>| Sign Out</a></li>
                    </ul>
                  </nav>
                  <Patients />
                </>
              } />
              <Route path='/wards' element={
                <>
                  <nav className='nav'>
                    <p className='dashboard'>WELLMEADOWS</p>
                    <ul>
                      <li><a href='/homepage' className='homepage'>Home</a></li>
                      <li><a href='/patients' className='patients'>Patients</a></li>
                      <li><a href='/wards' className='wards'>Wards</a></li>
                      <li><a href='/staffs' className='staffs'>Staffs</a></li>
                      <li><a href='/' className='signout'>| Sign Out</a></li>
                    </ul>
                  </nav>
                  <Wards />
                </>
              } />
              <Route path='/staffs' element={
                <>
                  <nav className='nav'>
                    <p className='dashboard'>WELLMEADOWS</p>
                    <ul>
                      <li><a href='/homepage' className='homepage'>Home</a></li>
                      <li><a href='/patients' className='patients'>Patients</a></li>
                      <li><a href='/wards' className='wards'>Wards</a></li>
                      <li><a href='/staffs' className='staffs'>Staffs</a></li>
                      <li><a href='/' className='signout'>| Sign Out</a></li>
                    </ul>
                  </nav>
                  <Staffs />
                </>
              } />

            </>
          )}
        </Routes>
      </div>
    </div>
  );
}

export default App;
