import * as petService from '../services/petService';
import Crypto from '../Crypto';
import {useState,useEffect} from 'react';
import { Routes, Route, Link } from 'react-router-dom';
function Home() {

    const [crypto,setCrypto] = useState([]);

    useEffect(() =>{
        petService.getAll()
            .then(result => {
                setCrypto(result);
            })
            .catch(err => {
                console.log(err);
            })
    },[]);

    return(
        <div className="container">
             <nav className='navbar-nav'>
                <Link to='all' className='nav-link shadow'>All Crypto</Link>
                <Link to='btc' className='nav-link shadow'>Bitcoin</Link>
                <Link to='eth' className='nav-link shadow'>Etherium</Link>

            </nav>
            <h1 className="text-center fw-bold">Home Page</h1>
            <p className="text-center fs-4">
                Crypto Price:
            </p>
            <ul>
                <Routes>
                    <Route path="all" element={<Crypto crypto={crypto} />} />
                    <Route path="btc" element={<p>BTC: $</p>} />
                    <Route path="eth" element={<p>ETH: $</p>} />
                </Routes>
            </ul>
        </div>
    );
}
export default Home;