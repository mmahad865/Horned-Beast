import './App.css';
import React from 'react';
import Header from './Header';
import Main from './Main';
import Fotter from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
    <Header />
    <Main />
    <Fotter />
    </div>
  );
}

export default App;