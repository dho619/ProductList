import React, { Component} from 'react';

import "./styles.css";

import Header from './components/Header';
import Main from './pages/main';

//Header e Main, estao sendo criados em outras pastas, para facilitar manutencao
const App = () => (
  <div className="App">
        <Header/>
        <Main/>
  </div>
);

export default App;
