import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib'

function App() {
  return (
    <Router>
    <div className="App">
      <div>
        <Route path={"/"} component={Fib} />
        <Route path={'/other-page'} component={OtherPage} />
      </div>
    </div>
    </Router>
  );
}

export default App;
