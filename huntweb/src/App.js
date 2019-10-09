import React from 'react';

import Routes from './routes';
import "./styles.css";
import Header from './components/Header';

//Header e Routes, estao sendo criados em outras pastas, para facilitar manutencao
const App = () => (
  <div className="App">
        <Header />
        <Routes />
  </div>
);

export default App;
