import React from 'react'
import Login from './components/Login'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div classname='App'>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path='/home'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
   