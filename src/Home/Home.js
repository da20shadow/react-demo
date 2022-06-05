import * as petService from '../services/petService';
import Crypto from '../Crypto';
import {useState,useEffect} from 'react';
import { Routes, Route, Link } from 'react-router-dom';
function Home() {

    const [crypto,setCrypto] = useState([]);
    const [counter,setCounter] = useState(0);
    const [personInfo,setPersonInfo] = useState({
        name: 'John',
        age: 23,
        hobbies: ['First','Second','Third'],
    });
    useEffect(() =>{
        petService.getAll()
            .then(result => {
                setCrypto(result);
            })
            .catch(err => {
                console.log(err);
            })
            //TODO
            return () => { console.log('Unmointed!')};
    },[counter]);

    const increaseCounter = () => {
        setCounter(x => x + 1);
        setTimeout(() =>{
            setPersonInfo(oldPersonInfo => ({
                ...oldPersonInfo,
                age: 27,
                hobbies: [...oldPersonInfo.hobbies, 'forth hoby']
            }));
        },2000);
    }
   
    return(
        <div className="container">
             <nav className='navbar-nav'>
                <Link to='all' className='nav-link shadow'>All Crypto</Link>
                <Link to='btc' className='nav-link shadow'>Bitcoin</Link>
                <Link to='eth' className='nav-link shadow'>Etherium</Link>
                <Link to='counter' className='nav-link shadow'>Counter</Link>

            </nav>
            <h1 className="text-center fw-bold">Home Page</h1>
            <p className="text-center fs-4">
                Crypto Price: 
            </p>
            <p className="text-center">Counter: {counter}</p>
            <ul>
                <Routes>
                    <Route path="all" element={<Crypto crypto={crypto} />} />
                    <Route path="btc" element={<p>BTC: $</p>} />
                    <Route path="eth" element={<p>ETH: $</p>} />
                    <Route path="counter" element={<button onClick={increaseCounter}>+</button>} />
                </Routes>
            </ul>
        </div>
    );
}
export default Home;