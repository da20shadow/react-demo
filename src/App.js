import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Login from './User/Login';
import Register from './User/Register';
import User from './User/User';
import Profile from './User/Profile';
import Account from './User/Account';
import Error from './Home/Error';
import {useState} from 'react';
import {Routes, Route, Link} from 'react-router-dom';


function App() {
  return (
    <>
      <Header/>
      <main className="container">
        
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/account" element={<Account />} />
            <Route path="/user/:username/:userId" element={<User />} />
            <Route path="/profile/:userId" element={<Profile />} />
            <Route path="/logout" render={(props) =>{
                console.log('Logged out!!!');
                // return <Redirect to="/home" />
            }} />
            <Route path="*" element={<Error />} /> {/* Default */}

        </Routes>

        <Link to="/user/vipearn/1" className="btn btn-primary btn-lg">User: vipearn</Link>
        <Link to="/profile/1" className="btn btn-primary btn-lg">Profile ID: vipearn</Link>


      </main>
      <Footer/>
    </>
  );
}

export default App;
