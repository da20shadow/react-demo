import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Login from './Home/Login';
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
            <Route path="*" element={<Error />} /> {/* Default */}

        </Routes>

        <nav>
          <Link to="/register" className="btn btn-primary btn-lg">Register Now</Link>
        </nav>

      </main>
      <Footer/>
    </>
  );
}

export default App;
