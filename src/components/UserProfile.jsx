import React from 'react'
import Button from 'react-bootstrap/Button';

class UserProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      avatar: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
}

handleSubmit = () => {
  console.log("submition, completion")
  console.log(this.state)
}

render () {
  return (
    <form className='profile'>
      <h6>User Profile</h6>
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
          <Button type="submit" style={{backgroundColor: '#616161', marginTop: '2em'}} onClick={this.handleSubmit}>Save Changes</Button>
      </div>
    </form>
  )
}
}

export default UserProfile