import React, { Component } from 'react';
import HeaderSection from './HeaderSection';
import EngineBay from './EngineBay';
import ControlsSection from './ControlsSection';
import './styles.scss'

export default class Card extends Component {
    render() {
        return (
            <div className='cardWrapper'>
                <div className='engineSection'>
                    <EngineBay></EngineBay>
                </div>
                <div className='header-controlsWrapper'>
                    <HeaderSection></HeaderSection>
                    <ControlsSection></ControlsSection>
                </div>
            </div>
        );
    }
}
