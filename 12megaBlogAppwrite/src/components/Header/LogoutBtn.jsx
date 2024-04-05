import React from 'react'
import {useDisapatch} from 'react-redux';
import {authService} from "../../appwrite/config"
import {logout} from "../../store/authSlice"

function LogoutBtn() {
    const dispatch = useDisapatch();
    const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout())
    })
  }
  return (
    <div className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>Logout</div>
  )
}

export default LogoutBtn