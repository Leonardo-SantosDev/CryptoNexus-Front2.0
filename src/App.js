import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// import LoginScreen from './pages/auth/login';
import Home from './pages/Home/home';
// import Cadastro from './pages/auth/cadastro';

// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      {/* <Cadastro/> */}
      {/* <LoginScreen/> */}
      <Home/>
      
    </div>

  );
}

export default App;
