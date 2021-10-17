import React, { Component } from 'react';
import WrapperContainer from './containers/WrapperContainer';
import './app.scss'

export default class App extends Component {
    render() {
        return (
            <div className='main'>
                <WrapperContainer>
                </WrapperContainer>
            </div>
        );
    }
}
