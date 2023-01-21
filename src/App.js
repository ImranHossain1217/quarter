import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import Offer from './pages/Offer';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <>
      <Router>
         <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/profile' element={<Profile/>} />
           <Route path='/signIn' element={<SignIn/>} />
           <Route path='/SignUp' element={<SignUp/>} />
           <Route path='/offer' element={<Offer />} />
           <Route path='/forgotPassword' element={<ForgotPassword />} />
         </Routes>
      </Router>
    </>
  );
}

export default App;
