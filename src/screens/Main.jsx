import React from 'react'
import Navigation from '../components/Navigation';
import AllMsg from '../components/AllMsg'



class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            user: {
                username: localStorage.getItem("username"),
                avatar: './hbu.jpg',
                email: localStorage.getItem("email"),
                token: localStorage.getItem("token"),
                id: Number(localStorage.getItem("userId"))
            }
        }
    }

    render() {

        return (
            <>
                <Navigation username={this.state.user.username} avatar={this.state.user.avatar} />
                <AllMsg />
            </>
        )
    }

}


export default Main;