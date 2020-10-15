import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './screens/Landing';
import { FaCloud } from "react-icons/fa";
import './App.css';
// import { render } from '@testing-library/react';


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
                <Landing logo={ FaCloud }/>
              </Route>
  
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
