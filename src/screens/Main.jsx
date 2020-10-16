import React from 'react'
import Navigation from '../components/Navigation';
import AllMsg from '../components/AllMsg'


const user = {
    'username': 'Grace Salas',
    'avatar': './hbu.jpg'
}

const Main = () => {

    return(<>   
        <Navigation username={user.username} avatar={user.avatar} />
        <AllMsg />


     </>)

}

export default Main;