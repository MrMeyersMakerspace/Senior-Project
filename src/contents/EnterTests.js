import React from 'react';
import UserContext from '../components/UserContext';
import { Redirect } from 'react-router-dom';

export default class EnterTests extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            testName: '',
            steps: [],
            desiredConcentration: '',
            formula: '',
            sizeOfTank: '',
            currentNumSteps: 1
        }

        this.handleUserInput = this.handleUserInput.bind(this);
        this.addStep = this.addStep.bind(this);
        this.removeStep = this.removeStep.bind(this);
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
        let newSteps = this.state.currentNumSteps + 1;
        console.log('newSteps = ' + newSteps);
        this.setState({
            currentNumSteps: newSteps
        })
    }

    removeStep(event) {
        let newSteps = this.state.currentNumSteps - 1;
        console.log('newSteps = ' + newSteps);
        this.setState({
            currentNumSteps: newSteps
        })
    }

    render() {
        const user = this.context;
        if (!user.isAuthenticated) {
            return <Redirect to='/' />
        }
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
                    id='step1'
                    onChange={this.handleUserInput} />
                <br />
                <div className='addRemoveButtonGroup'>
                    <button onClick={this.addStep} style={{ float: 'left' }}>Add Step</button>
                    <button onClick={this.removeStep} style={{ float: 'right' }}>Remove Step</button>
                </div>
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
                    type='number'
                    onChange={this.handleUserInput} />
                <br />
                <p>{this.state.currentNumSteps}</p>
            </div>
        )
    }
}
EnterTests.contextType = UserContext;