import React from 'react'
import {Button, Modal} from 'react-bootstrap';
import { FiUser } from "react-icons/fi";
import {updateUser, deleteUser} from './../services';

class UserProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // probably have these values equal to the current user's info instead of empty string
      username: '',
      password: '',
      avatar: '',
      error: null,
      isOpen: false
    }
  }

  showModal = () => {
    this.setState({isOpen: true})
  };

  hideModal = () => {
    this.setState({isOpen: false})
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
}

  handleSubmit = async (e) => {
  //* "this is where we will call the update user method from our services"
    e.preventDefault();
    this.setState({isOpen: false})
    const resp = await updateUser(this.state);
    if (!resp) {
        this.setState({
            error: 'Could not update correctly.'
        })
    } else {
        await this.props.setUser({username: resp.data.username, password: resp.data.password, avatar: resp.data.avatar});
        this.props.history.push(`/main`);
    }
  }

  handleDelete = async (e) => {
    e.preventDefault();
    this.setState({isOpen: false})
    const resp = await deleteUser(this.state);
    if (!resp) {
        this.setState({
            error: 'Could not delete user.'
        })
    } else {
        await this.props.setUser({username: null, password: null, avatar: null});
        this.props.history.push(`/`);
    }
  }

render () {
  return (
    <>
      <a href="#home" onClick={this.showModal}>
            {" "}
            <FiUser size="2em" color="white" className="mr-4" />
          </a>
      {/* <button onClick={this.showModal}>open profile modal</button> */}
      <Modal show={this.state.isOpen} onHide={this.hideModal}>
      <Modal.Header style={{backgroundColor: '#cccccc'}} closeButton>
        <Modal.Title>User Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='profileField'>
          <label htmlFor='username'>USERNAME</label>
          <input type='text' name='username' placeholder='Change username' value={this.state.username} onChange={(e) => this.handleChange(e)}/>
        </div>
        <div className='profileField'>
          <label htmlFor='password'>PASSWORD</label>
          <input type='password' name='password' placeholder='Change password' value={this.state.password} onChange={(e) => this.handleChange(e)}/>
        </div>
        <div className='profileField'>
        <label htmlFor='avatar'>AVATAR</label>
        <input type='text' name='avatar' placeholder='Enter an image url' value={this.state.avatar} onChange={e => this.handleChange(e)}/>
        </div>
      </Modal.Body>
      <Modal.Footer style={{backgroundColor: '#cccccc'}}>
        <div className="user-buttons">
          {this.state.error}
          <Button variant='danger' onClick={this.handleDelete} style={{width: '10em', background: 'none', border: 'none', color: 'red'}}>Delete account</Button>
          <Button type="submit" variant='secondary' onClick={this.handleSubmit} style={{width: '10em', height: '50px'}}>Save Changes</Button>
        </div>
      </Modal.Footer>
    </Modal>

      {/* <h3>User Profile</h3>
      <div className='profileField'>
          <label htmlFor='username'>USERNAME</label>
          <input type='text' name='username' placeholder='Change username' value={this.state.username} onChange={(e) => this.handleChange(e)}/>
      </div>
      <div className='profileField'>
          <label htmlFor='password'>PASSWORD</label>
          <input type='password' name='password' placeholder='Change password' value={this.state.password} onChange={(e) => this.handleChange(e)}/>
      </div>
      <div className='profileField'>
        <label htmlFor='avatar'>AVATAR</label>
        <input type='text' name='avatar' placeholder='Enter an image url' value={this.state.avatar} onChange={e => this.handleChange(e)}/>
      </div>
      <div className="updateUserButton">
          {this.state.error}
          <Button type="submit" style={{backgroundColor: '#616161', marginTop: '3em'}}  onClick={this.handleSubmit}>Save Changes</Button>
      </div> */}
    </>
  )
}
}


export default UserProfile