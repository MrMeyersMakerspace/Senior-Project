import React from 'react';

const Steps = (props) => {
    return (
        props.stepList.map((value, index) => {
            const stepNumber = `step-${index}`;
            return (
                <div className='step' key={value.idx}>
                    <label>Instructions for Step {index + 1}:</label>

                    <textarea
                        name='step'
                        id={stepNumber}
                        data-id={index}
                        type='text'
                        onChange={props.handleUserInput}
                    />
                    <br />
                </div>
            )
        })
    )
}
export default Steps;