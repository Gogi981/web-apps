import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js'
import Main from './Main.js';
import data from '../Data.js';

function App() {
  return (
    <div>
      <Header text="My React Blog" />

      <Main data={data}></Main>
      <Footer text="007" />
    </div>
  );
}

export default App;
