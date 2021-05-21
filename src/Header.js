import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import WhatshotIcon from '@material-ui/icons/Whatshot';

function Header(){
    return (
        <div className="header">
            <IconButton>
                <PersonIcon className="header-icon"/>
            </IconButton>

            <IconButton>
                <WhatshotIcon className="header-logo"/>
            </IconButton>

        </div>
    );
}

export default Header;