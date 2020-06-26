import React from 'react';

export default class Social extends React.Component {
    render() {
        return (
            <div className='social'>
                <a href='https://www.instagram.com/mrmeyersmakerspace/' target='_blank' rel='noopener noreferrer'><i className='fab fa-instagram'> </i></a>
                <a href='https://github.com/MrMeyersMakerspace' target='_blank' rel='noopener noreferrer'><i className='fab fa-github'> </i></a>
                <a href='https://www.linkedin.com/in/john-h-meyers/' target='_blank' rel='noopener noreferrer'><i className='fab fa-linkedin'> </i></a>
            </div>
        )
    }
}