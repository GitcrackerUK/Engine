import React, { Component } from 'react';
import styles from './wrapper.styles.scss';

export class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: this.props.width,
            height: this.props.height,
        };
    }
    render() {
        return <div className={styles.wrapper}>{this.props.child}</div>;
    }
}
