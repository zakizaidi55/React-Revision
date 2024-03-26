import React from 'react'
import { useContext } from 'react';
import UserConextProvider from '../context/UserContextProvider';
import UserContext from '../context/UserConext';

function Profilr() {
    const {user} = useContext(UserContext);
    if(!user) {
        return <div>Please login</div>
    }

    return <div>welcome {user.username}</div>
}

export default Profilr
