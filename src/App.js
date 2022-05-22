import './App.css';
import Header from './Header/';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import User from './User/User';
import Profile from './User/Profile';
import Account from './User/Account';
import Error from './Home/Error';
import * as React from 'react';
import * as authService from './services/authServices';
import {Routes, Route, Link} from 'react-router-dom';

const Login = React.lazy(() => import('./User/Login'));
const Register = React.lazy(() => import('./User/Register'));


function App() {

  let [userInfo,setUserInfo] = React.useState({isLogged: false, username: ''});

  React.useEffect(() =>{
    let user = authService.getUser();
    setUserInfo({
      isLogged: Boolean(user),
      user,
    })
  },[]);

  const onLoginHandler = (username) => {
    setUserInfo({
      isLogged: true,
      user: username,
    })
  }

  return (
    <>
      <Header {...userInfo} />
      <main className="container">
        
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/home/*" element={<Home />} />
            <Route path="/login" 
              element={
                <React.Suspense fallback={<p>Loading...</p>}>
                  <Login onLoginHandler={onLoginHandler} />
                </React.Suspense>
                } 
            />
            <Route path="/register" 
              element={
                <React.Suspense fallback={<p>Loading...</p>}>
                   <Register />
                </React.Suspense>
              } 
            />
            <Route path="/account" element={<Account {...userInfo} />} />
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
