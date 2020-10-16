import React from 'react'

import Navigation from './Navigation';

const user = {
    'username': 'Grace Salas',
    'avatar': './hbu.jpg'
}

const Main = () => {
    return(<>   
        <Navigation username={user.username} avatar={user.avatar} />
        <h1>Messages</h1>
     </>)
}

export default Main;