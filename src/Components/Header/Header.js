import React from 'react';

import './Header.css';

import Logo from './Logo';
import Title from './Title';

const Header = () => {

    return (
        <div className="App-header">
            <Logo />
            <Title />
        </div>
    );
};

export default Header;