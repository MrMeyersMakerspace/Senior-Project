import React from 'react';
import { Input } from '../components/Input';

export default class EnterTests extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            testName: '',
            steps: [],
            desiredConcentration: '',
            formula: '',
            sizeOfTank: ''
        }

        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    addStep(event) {

    }

    render() {
        return (
            <div className='condiv home'>
                <h1 className='centerText'>Please enter your testing procedures below</h1>
                <br />
                <label>Test Name:</label>
                <input
                    name='testName'
                    type='text'
                    onChange={this.handleUserInput} />
                <br />
                <label>Instructions for Step:</label>
                <textarea
                    name='steps'
                    type='text'
                    onChange={this.handleUserInput} />
                <br />
                <button onClick={this.addStep}>Add Step</button>
                <br />
                <label>Desired Chemical Concentration <span className='instructions'>(number only)</span>:</label>
                <input
                    name='desiredConcentration'
                    type='number'
                    onChange={this.handleUserInput} />
                <br />
                <label>Calculation Formula <span className='instructions'>(letters, spaces, and + - * / ^ symbols only)</span>:</label>
                <input
                    name='formula'
                    type='text'
                    onChange={this.handleUserInput} />
                <br />
                <label>Size of Tank <span className='instructions'>(number only)</span></label>
                <input
                    name='formula'
                    type='text'
                    onChange={this.handleUserInput} />
            </div>
        )
    }
}