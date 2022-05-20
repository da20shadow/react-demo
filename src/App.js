import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import {useState} from 'react';

function App() {

  let [tasks,setTasks] = useState(
    [
      {id: 1, title: "Task title 1"}, 
      {id: 2, title: "Task Title 2"}, 
      {id: 3, title: "Task Title 3"}
    ]
    );

  console.log(tasks);

  return (
    <>
  
    <div className="App">

      <Header/>

      <ul>
        {tasks.map((task) =><li key={task.id}>{task.title}</li>)}
      </ul>

      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello React App!  
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    <footer style={{textAlign: 'center'}}>
      copyright &copy; 2022
    </footer>
    </>
  );
}

export default App;
