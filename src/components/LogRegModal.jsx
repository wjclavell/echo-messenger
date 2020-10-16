import React from 'react';
import { useHistory } from 'react-router-dom';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";
import {login} from '../services/index'


class LogRegModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            username: '',
            password: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClose = () => {
        this.setState({
            show: false
        })
    }

    handleShow = () => {
        this.setState({
            show: true
        })
    }



    handleSave = async event => {
        console.log("event", event)
        const loginData = {
            username: this.state.username,
            password: this.state.password
        }
        console.log("handleSave login", loginData)
        const resp = await login(loginData);

        console.log("resp", resp)
        console.log("resp status", resp.status )
        if(resp.status == 200) {
            //TODO: pass response to main page
            //TODO: send user to main page
            this.useHistory().push("main")
            
        }

    

        this.setState({
            show:false
        })
    }


    isRegOrLoginHeader = () => {
        if(this.props.isLogin) {
            return "Login"
        }
        
        return "Register"
    }

  
    render() {
        const {modalName, styling} = this.props
        return (
        <>
            <Button variant={styling} onClick={this.handleShow}>
            {modalName}
            </Button>
    
            <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{this.isRegOrLoginHeader()}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" name="username" placeholder="Enter username" value={this.state.username} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Enter password" value={this.state.password} onChange={this.handleChange} />
                    </Form.Group>
                </Form>              
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                Close
                </Button>
                <Button variant="primary" onClick={this.handleSave}>
                Login
                </Button>
            </Modal.Footer>
            </Modal>
        </>
        );
    }

}

export default LogRegModal;