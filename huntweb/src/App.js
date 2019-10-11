import React from 'react';

import Routes from './routes';
import "./styles.css";
import Header from './components/Header';
import Footer from './components/Footer';

//Header e Routes, estao sendo criados em outras pastas, para facilitar manutencao
const App = () => (
  <div className="App">
        <Header />
        <div className="master">
          <Routes />
        </div>
        <Footer />
  </div>
);

export default App;
