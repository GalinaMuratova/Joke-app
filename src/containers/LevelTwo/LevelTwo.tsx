import React, {useEffect, useState} from 'react';
import './LevelTwo.css'

const LevelTwo = () => {
    const [joke, setJoke] = useState('');

    const url = 'https://api.chucknorris.io/jokes/random';

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);

            if (response.ok) {
                const newJoke = await response.json();
                setJoke(newJoke.value);
            }
        };
        fetchData().catch(e => console.error(e));
    }, []);

    return (
        <div className="container">
            <h2>Best Chuck Norris`s jokes :</h2>
            <p>{joke}</p>
            <button type="button" className="btn-next">Next</button>
        </div>
    );
};

export default LevelTwo;