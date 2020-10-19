import React from "react";
import { Navbar, Nav} from "react-bootstrap";
import Logo from "../assets/echo_logo_orange.svg";
// import { FiUser } from "react-icons/fi";

import UserProfile from './UserProfile';

// import './index.css';
import Image from "react-bootstrap/Image";

const Navigation = ({ username }) => {
  const [show, setShow] = React.useState(false); //hook

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <Image
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            roundedCircle
          />
        </Navbar.Brand>
        <Nav className="mr-auto" bg="light">
          <Navbar.Text> {username}</Navbar.Text>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          {/* <a href="#home" onClick={handleShow}>
            {" "}
            <FiUser size="2em" color="white" className="mr-4" />
          </a> */}
          <UserProfile show={show} onHide={handleClose}/>

          <a href="/"> <Navbar.Text>Logout</Navbar.Text> </a>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
