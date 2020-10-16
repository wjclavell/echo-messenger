import React from 'react'
import Button from 'react-bootstrap/Button';
import {updateUser} from './../services'

class UserProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // probably have these values equal to the current user's info instead of empty string
      username: '',
      password: '',
      avatar: '',
      error: null,
    }
  }

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
          <Button type="submit" style={{backgroundColor: '#616161', marginTop: '3em'}} onClick={this.handleSubmit}>Save Changes</Button>
      </div>
    </form>
  )
}
}

export default UserProfile