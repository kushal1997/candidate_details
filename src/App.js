
import { Route, Routes } from 'react-router-dom';
import './App.css';

import { Login } from './login/Login';
import Candidate from './candidate/Candidate';

function App() {
  return (
    <div className="App">


      <Routes>
      <Route path="/" Component={Login}></Route>
      <Route path="/recruiter" Component={Candidate}></Route>
      </Routes>
    </div>
  );
}

export default App;
