import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from './screens/Landing';
import './App.css';
// import UserProfile from './components/UserProfile'
// import { render } from '@testing-library/react';
import Main from './screens/Main'


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
              <Route exact path="/">
                <Landing />
              </Route>
              <Route path="/main">
                <Main/>
              </Route>
  
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;