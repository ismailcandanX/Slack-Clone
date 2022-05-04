import React from 'react'
import Avatar from '@mui/material/Avatar'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import SearchIcon from '@mui/icons-material/Search'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import LogoutIcon from '@mui/icons-material/Logout'
import './Header.css'
import { useStateValue } from '../StateProvider'
import { getAuth, signOut } from 'firebase/auth'
import { actionTypes } from '../reducer'

function Header() {
  const [{ user }] = useStateValue()
  const [state, dispatch] = useStateValue()
  const logout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch({
        type: actionTypes.SET_USER,
        user: null,
      })
      console.log('sign out successful');
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
  }
  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <AccessTimeIcon className="header__time" />
      </div>
      <div className="header__search">
        <SearchIcon />
        <input type="text" placeholder="Search or start new chat" />
      </div>
      <div className="header__right">
        <HelpOutlineIcon />

        <LogoutIcon onClick={logout} alt="logout" className="header__logout" />
      </div>
    </div>
  )
}

export default Header
