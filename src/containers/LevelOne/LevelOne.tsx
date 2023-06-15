import React from 'react';
import './LevelOne.css'
import {IMovies} from "../../types";
import FormAdd from "./FormAdd/FormAdd";

interface State {
    movies: IMovies[];
}

class LevelOne extends React.Component<{}, State> {
    state: State = {
        movies: []
    };

    addMovie = (movie: IMovies) => {
        const newMovieList = [...this.state.movies, movie];
        console.log(newMovieList);
        this.setState((prevState) => ({
            ...prevState,
            movies: newMovieList
        }))
        console.log(this.state.movies);

    };



    deleteMovie = () => {
    };

    editMovie = () => {

    };

    render() {
        return (
            <div className="container">
                <FormAdd add={this.addMovie} />
                <div className="block-movies">
                    <h2>To watch list:  </h2>
                    <div className='card-movie'>
                        <input className="input-form-edit"/>
                        <button className="btn-delete">Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default LevelOne;




