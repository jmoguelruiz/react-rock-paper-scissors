import React, { Component } from 'react';
import {css} from 'glamor';
import {Header, Weapons, Board} from './components';

class Container extends Component{
    render(){
        return (
            <div>
                <Header />
                <Board />
                <Weapons />
            </div>
        );
    }
}

export default Container;