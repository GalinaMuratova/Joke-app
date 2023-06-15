import React from 'react';
import './LevelOne.css'
import {IMovies} from "../../types";
import FormAdd from "./FormAdd/FormAdd";
import MovieBlock from "./MovieBlock/MovieBlock";

interface State {
    movies: IMovies[];
}

class LevelOne extends React.Component<{}, State> {
    state: State = {
        movies: []
    };

    addMovie = (movie: IMovies) => {
        const newMovieList = [...this.state.movies, movie];
        this.setState((prevState) => ({
            ...prevState,
            movies: newMovieList
        }));
    };

    deleteMovie = (id: string) => {
        const filteredMovies = this.state.movies.filter(movie => movie.id !== id);
        this.setState((prevState) => ({
            ...prevState,
            movies: filteredMovies
        }));
    };

    editMovie = () => {

    };

    render() {
        return (
            <div className="container">
                <FormAdd add={this.addMovie} />
                <div className="block-movies">
                    <h2>To watch list:  </h2>
                    {this.state.movies.map((movie) => (
                        <MovieBlock key={movie.id} value={movie.title} delete={() =>this.deleteMovie(movie.id) } />
                    ))}
                </div>
            </div>
        );
    }
}

export default LevelOne;




