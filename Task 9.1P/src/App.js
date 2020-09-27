import React from 'react';
//import logo from './header.png';
import logo from './assets/profile_1.jpg';
import './App.css';
import Header from './components/Header.js';
import HomeTabs from './components/HomeTabs.js';
import Footer from './components/footer.js';


function App() {
  return (
    <div>
    <div className="app">
      <header className="app-header">
        <img src={logo}  
           className="app-logo" alt="logo" 
          />
        <Header />
      </header>
      <HomeTabs />
      </div>
    <div className='icons-List'><Footer/>
    </div></div>
  );
}

export default App;
