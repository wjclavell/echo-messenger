import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from './screens/Landing';
import './App.css';
// import { render } from '@testing-library/react';

<<<<<<< HEAD
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <UserProfile />
      </header>
    </div>
  );
=======

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    return (
      <div className="App">
          <BrowserRouter>
            <Switch>
              

              <Route path="/">
                <Landing />
              </Route>
  
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
>>>>>>> 2b9c8a1d1817affad047437f5bba120d49888f42
}

export default App;
