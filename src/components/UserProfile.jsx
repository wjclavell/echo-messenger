import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import {updateUser} from './../services';

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

render () {
  return (
    <form className='profile'>
      <Modal show={this.state.isOpen}>
      <Modal.Header>
        <h3>User Profile</h3>
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
      <Modal.Footer>
        <div className="updateUserButton">
          {this.state.error}
          <Button type="submit" variant='secondary' style={{margin: '0 auto'}} onClick={this.handleSubmit}>Save Changes</Button>
        </div>
      </Modal.Footer>
    </Modal>
    <button onClick={this.showModal}>open profile modal</button>
      <h3>User Profile</h3>
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
      </div>
    </form>
  )
}
}


export default UserProfile