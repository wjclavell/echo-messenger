import React from 'react';
// import logo from './logo.svg';
import './index.css';
import { ReactComponent as logo} from '../src/logo.svg';

function App() {
  return (
      <Navbar>
        <NavItem icon={<BellIcon/>}/>
      </Navbar>

  );
}

function Navbar(props){
  return (
    <nav className="navbar">
      <ul className="navbar-list"> { props.children } </ul>
    </nav>
  );
}
function NavItem(props){
  return(
    <li className="nav-item">
      <a href="#" className="icon-button">
        {props.icon}
      </a>
    </li>
  );
}


export default App;
