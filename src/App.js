import React from 'react';
import Header from 'src/components/Header.js';
import Main from  'src/components/Main.js';
import Footer from 'src/components/Footer.js';
import './App.css';

class App extends React.Component {
  render () {
    return (

      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    
    )
  }
}

export default App;
