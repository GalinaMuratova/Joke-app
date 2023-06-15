import React, {useState} from 'react';
import './LevelTwo.css'

const LevelTwo = () => {
    const [joke, setJoke] = useState('');

    const url = 'https://api.chucknorris.io/jokes/random';
    return (
        <div className="container">
            <h1>Best Chuck Norris`s jokes :</h1>
            <p>Some text</p>
            <button type="button" className="btn-next">Next</button>
        </div>
    );
};

export default LevelTwo;