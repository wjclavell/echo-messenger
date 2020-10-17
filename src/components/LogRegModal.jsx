import React from 'react';
//used to pass data to another screen
import { withRouter } from 'react-router-dom';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";

import {login, register} from '../services/index'
import { clearHeader } from '../services/apiConfig';


class LogRegModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            username: '',
            password: '',
            email: '',
            firstname: '',
            lastname: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClose = () => {
        this.setState({
            show: false,
            username: '',
            password: '',
            email: '',
            firstname: '',
            lastname: ''
        })
    }

    handleShow = () => {
        this.setState({
            show: true
        })
    }

    handleSave = async event => {
        if(!this.props.isLogin) {
            const registerData = {
                first_name: this.state.firstname,
                last_name: this.state.lastname,
                email: this.state.email,
                username: this.state.username,
                password: this.state.password
            }
            //TODO: make register request
            const resp = await register(registerData);
            console.log("handleSave Register response", resp)
            console.log("resp status", resp.status )
        }

        // since register does not return ID, after user is registered, login request will be made right after
        const loginData = {
            username: this.state.username,
            password: this.state.password
        }
        const resp = await login(loginData);

        console.log("handleSave Login response", resp)
        console.log("resp status", resp.status )

        if(resp.status == 200) {
            //saves data in local storage
            localStorage.setItem("username", resp.data.username)
            localStorage.setItem("userId", resp.data.id)
            localStorage.setItem("email", resp.data.email)

            //sends user to main page
            this.props.history.push({
                pathname: "/main",
                data: resp.data
            })
        }else {
            //TODO:  throw toast with error
            console.log("login failed", resp.status)
        }

        this.setState({
            show:false
        })
    }

  
    render() {
        const {modalName, styling} = this.props
        const BtnName = this.props.isLogin ? ("Login") : ("Register")

        const ifRegisterModal = this.props.isLogin ? (<> </>) : (
            <>

            <Form.Group controlId="formBasicFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name="firstname" placeholder="Enter First Name" value={this.state.firstname} onChange={this.handleChange} />
            </Form.Group>

            <Form.Group controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name="lastname" placeholder="Enter Last Name" value={this.state.lastname} onChange={this.handleChange} />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />
            </Form.Group>

            </>
        )

        return (
        <>
            <Button variant={styling} onClick={this.handleShow} style={{fontWeight: 'bold'}}>
            {modalName}
            </Button>
    
            <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{BtnName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {ifRegisterModal}

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
                Save
                </Button>
            </Modal.Footer>
            </Modal>
        </>
        );
    }

}

export default withRouter(LogRegModal);