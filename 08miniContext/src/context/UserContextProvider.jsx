import React, { useState } from "react";
import UserContext from "./UserConext";

const UserConextProvider = ({children}) => {
    const[user, setUser] = useState(null)
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )

}

export default UserConextProvider;