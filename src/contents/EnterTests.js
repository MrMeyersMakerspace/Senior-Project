import React from 'react';
import UserContext from '../components/UserContext';
import Steps from '../components/Steps';
import { Redirect } from 'react-router-dom';

export default class EnterTests extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            testName: '',
            stepList: [{ idx: Math.random(), step: '' }],
            desiredConcentration: '',
            formula: '',
            sizeOfTank: ''
        }

        this.handleUserInput = this.handleUserInput.bind(this);
        this.addStep = this.addStep.bind(this);
        this.removeStep = this.removeStep.bind(this);
        // this.handleStepInput = this.handleStepInput.bind(this);
    }

    handleUserInput(event) {
        if (['step'].includes(event.target.name)) {
            const stepList = [...this.state.stepList];
            stepList[event.target.dataset.id][event.target.name] = event.target.value;
            this.setState({
                [event.target.name]: event.target.value
            })
        } else {
            this.setState({
                [event.target.name]: event.target.value
            })
        }
    }

    addStep = (event) => {
        this.setState((prevState) => ({
            stepList: [...prevState.stepList, { idx: Math.random(), step: '' }]
        }));
    }

    removeStep = (event) => {
        const newStepList = this.state.stepList.slice(0, (this.state.stepList.length - 1));
        console.log(newStepList);
        this.setState({
            stepList: newStepList
        })
    }

    render() {
        // const user = this.context;
        // if (!user.isAuthenticated) {
        //     return <Redirect to='/' />
        // }

        const { stepList } = this.state;
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
                <Steps stepList={stepList} handleUserInput={this.handleUserInput} />
                <div className='addRemoveButtonGroup'>
                    <button onClick={this.addStep} style={{ float: 'left' }}>Add Step</button>
                    <button onClick={this.removeStep} style={{ float: 'right' }}>Remove Step</button>
                </div>
                <br />
                <label>Desired Chemical Concentration <span className='instructions'>(number only)</span> :</label>
                <input
                    name='desiredConcentration'
                    type='number'
                    onChange={this.handleUserInput} />
                <br />
                <label>Calculation Formula <span className='instructions'>(letters, spaces, and + - * / ^ symbols only)</span> :</label>
                <input
                    name='formula'
                    type='text'
                    onChange={this.handleUserInput} />
                <br />
                <label>Size of Tank <span className='instructions'>(number only)</span> :</label>
                <input
                    name='sizeOfTank'
                    type='number'
                    onChange={this.handleUserInput} />
                    
            </div>
        )
    }
}
EnterTests.contextType = UserContext;