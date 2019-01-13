import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

class App extends Component {
    constructor(){
        super();
        this.state = {
            user:{
                photoURL: 'https://picsum.photos/400',
                email: 'mplascencia.cruz@gmail.com',
                onOpenText: false
            }
        }
    }
    render() {
        return (
            <div>
                <Header/>
                <Main user={this.state.user}/>
            </div>
        );
    }
}

export default App;
