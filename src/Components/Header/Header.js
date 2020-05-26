import React from 'react';

import Logo from './Logo';
import Title from './Title';

const Header = () => {
    return (
        <div className="app-header">
            <Logo />
            <Title />
        </div>
    );
};

export default Header;