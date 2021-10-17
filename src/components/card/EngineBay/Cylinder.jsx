import React, { Component } from 'react'

export default class Cylinder extends Component {
    constructor(props){
        super(props)
        console.log(props);
    }
    render() {
        return (
            <div className='cylinderWrapper'>
                <div className={!this.props.fired ? 'cylinder' : 'fired'}></div>
            </div>
        )
    }
}
