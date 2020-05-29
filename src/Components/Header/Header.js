import React, {useEffect} from 'react';

import './Header.css';

import Logo from './Logo';
import Title from './Title';

const Header = () => {
    useEffect(() => {
        if(window.matchMedia &&
           window.matchMedia('(prefers-color-scheme: dark)').matches){
               // Set dark theme here
        }
    }, []);

    return (
        <div className="App-header">
            <Logo />
            <Title />
        </div>
    );
};

export default Header;