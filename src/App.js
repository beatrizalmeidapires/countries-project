import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header.jsx';
import SearchPart from './Components/SearchPart.jsx';



function App() {

  return (
    <div className="App">
    <Header/>
    <SearchPart/>
    </div>
  );
}

export default App;
