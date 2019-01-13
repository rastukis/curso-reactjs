import React, { Component } from 'react';
import uuid from 'uuid';

import MessageList from '../MessageList/MessageList';

import InputText from '../InputText';
import ProfileBar from '../ProfileBar';

class Main extends Component{
    constructor(){
        super()
        this.state = {
            openText: false,
            messages: [
                {
                    id: uuid.v4(),
                    text: 'Mensaje de prueba',
                    picture: 'https://picsum.photos/400',
                    displayName: 'Miguel Ángel Plascencia',
                    username: 'rastukis',
                    date: Date.now()
                }

                ]
        }
    }

    handleOpenText(event){
        event.preventDefault();

        this.setState({openText:true})
    }

    renderOpenText(){
        if(this.state.openText){
            return <InputText />
        }
    }

    render(){
        return (
            <div>
                <ProfileBar
                    picture={this.props.user.photoURL}
                    username={this.props.user.email.split('@')[0]}
                    onOpenText={this.handleOpenText}
                />
                {this.renderOpenText()}
                <MessageList messages={this.state.messages} />
            </div>
        )
    }
}

export default Main