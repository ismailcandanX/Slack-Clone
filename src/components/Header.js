import React from 'react'
import Avatar from '@mui/material/Avatar'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import "./Header.css"
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <Avatar 
        className="header__avatar" 
        alt="Ismail Candan"
        src=""
        />
        <AccessTimeIcon className="header__time" />
      </div>
      <div className="header__search">
        <SearchIcon />
        <input type="text" placeholder="Search or start new chat" />
      </div>
      <div className="header__right">
        <HelpOutlineIcon />
        </div>
    </div>
  )
}

export default Header
