import React from 'react';
import './App.css';
import {Header} from './common/index'
import {PlayersListing} from './features/Players/Pages/PlayersListing'
import {Routes, Route} from 'react-router-dom';


function App() {


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<PlayersListing />} />
      </Routes>
    </div>
  );
}

export default App;

//yarn add history@5 react-router-dom@6