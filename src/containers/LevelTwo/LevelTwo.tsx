import React, {useEffect, useState} from 'react';
import './LevelTwo.css'

const LevelTwo = () => {
    const [joke, setJoke] = useState('');
    const url = 'https://api.chucknorris.io/jokes/random';

    useEffect(() => {
        getNewJoke();
    }, []);

    const getNewJoke = async () => {
        try {
            const response = await fetch(url);
            if (response.ok) {
                const newJoke = await response.json();
                setJoke(newJoke.value);
            }
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="container">
            <h2>Best Chuck Norris`s jokes :</h2>
            <p>{joke}</p>
            <button type="button" className="btn-next" onClick={getNewJoke}>Next</button>
        </div>
    );
};

export default LevelTwo;