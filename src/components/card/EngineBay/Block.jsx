import React, { Component } from 'react';
import Cylinder from './Cylinder';
import './styles.scss';

// I have problem with clearing interval
//

export default class Block extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cylinders: 4,
            fired: {
                1: false,
                2: false,
                3: false,
                4: false,
            },
            IntervalId: '',
        };
        this.returnCylinders = this.returnCylinders.bind(this);
        this.startEngine = this.startEngine.bind(this);
        this.stopEngine = this.stopEngine.bind(this);
    }

    startEngine() {
        let i = 0;
        this.interval = setInterval(() => {
            let order = [1, 3, 4, 2];
            let stroke = order[i];

           
            Object.keys(this.state.fired).map( key => {
               if(key!=stroke){
                this.setState({ fired: { [key] : false } });
               }
            });
            this.setState({ fired: { ...this.state.fired, [stroke]: true } });
            i += 1;
            if (i === 5) {
                i = 0;
            }
        }, 2000);
    }

    stopEngine() {
        Object.keys(this.state.fired).map( key => {
            this.setState({ fired: { [key] : false } });
        });
        clearInterval(this.interval);
    }

    returnCylinders() {
        let cylinders = [];
        for (let i = 0; i <= this.state.cylinders - 1; i++) {
            cylinders.push(<Cylinder fired={this.state.fired[i + 1]} position={i + 1}></Cylinder>);
        }
        return cylinders;
    }

    render() {
        return (
            <div className='cylinderBlockWrapper'>
                {this.returnCylinders()}
                <button onClick={this.startEngine}>ON</button>
                <button onClick={this.stopEngine}>OFF</button>
            </div>
        );
    }
}
