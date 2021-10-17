import React, { Component } from 'react';
import './styles.scss'
import Wrapper from '../../components/wrapper';
import V8 from '../../components/engineBlocks/v8';
import R4 from '../../components/engineBlocks/r4';

export default class WrapperContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='wrapperContainer' >
                <Wrapper title={this.props.title}>
                    <R4></R4>
                    <V8></V8>
                </Wrapper>
            </div>
        );
    }
}
