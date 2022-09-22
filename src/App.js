import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {
render() {
  return (
    <>
   < Header/>
   <Main/>
   <Footer/>
    </>
  );
}
}


export default App;