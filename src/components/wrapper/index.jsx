import React, { Component } from 'react';
import { wrapper } from './wrapper.styles.scss';

export default class Wrapper extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={wrapper}>
                {this.props.children}
            </div>
        )
    }
}
