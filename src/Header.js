import React from 'react';
import './Header.css';

//Icons
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';

//Materials
import IconButton from '@mui/material/IconButton'

function Header() {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize="large" className="headerIcon" />
            </IconButton>
            <img className='headerLogo' 
                src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.jpg" 
                alt="" 
            />

            <IconButton>
                <ForumIcon fontSize="large" className="headerIcon" />
            </IconButton>

        </div>
    )
}

export default Header
