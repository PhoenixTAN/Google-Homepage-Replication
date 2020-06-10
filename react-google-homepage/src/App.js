import React from 'react';
import './App.css';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js'
import Main from './Content/Container/Main.js';
import SearchForm from './Content/SearchForm/SearchForm.js'
import googleLogo from './images/googlelogo.png';


function App() {
  return (
    <div className="App">
      <Header/>
      <Main>
        <img alt="Hello" className="google-logo" src={googleLogo}></img>
        <SearchForm/>
      </Main>
      <Footer/>
    </div>
  );
}

export default App;
