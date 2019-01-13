import React, { Component } from 'react';

import './Header.css';

class Header extends Component{
    render (){
        return(
            <header className='root'>
                <h1 className='logo'>Reacttr</h1>
            </header>
        )
    }
}

export default Header