import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";

//TODO: figure out why not changing state for username

function LogRegModal({modalName, styling, isLogin})  {
    // const [show, setShow] = React.useState(false);

    const [state, setState] = React.useState({
        show: false,
        setShow: false,
        username: '',
        password: '',
    })

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    const handleClose = () => {
        setState({
            setShow: false
        })
    }

    const handleShow = () => {
        setState({
            setShow: true
        })
    }
  
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);


    const isRegOrLoginHeader = () => {
        if(isLogin) {
            return "Login"
        }
        
        return "Register"
    }
  
    return (
      <>
        <Button variant={styling} onClick={handleShow}>
          {modalName}
        </Button>
  
        <Modal show={state.show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{isRegOrLoginHeader()}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name="username" placeholder="Enter username" value={state.username} onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Enter password" value={state.password} onChange={handleChange} />
                </Form.Group>
            </Form>              
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  

export default LogRegModal;