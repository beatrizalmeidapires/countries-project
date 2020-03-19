import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchPart from './Components/SearchPart.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './About';

// <SearchPart/>
function App() {
  return (
    <Router>
        <div>
          <Switch>
              <Route path="/" exact component={SearchPart}/>
              <Route path="/about" component={About}/>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
