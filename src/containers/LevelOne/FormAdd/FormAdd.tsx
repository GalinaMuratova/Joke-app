import React, { Component } from 'react';
import { IMovies } from "../../../types";

interface Props {
    add: (movie: IMovies) => void;
}

interface State {
    movie: string;
}

class FormAdd extends Component<Props, State> {
    state: State = {
        movie: ''
    };

    onSubmitForm = (e: React.FormEvent) => {
        e.preventDefault();

        if (this.state.movie !== '') {
            const newMovie: IMovies = {
                id: Math.random().toString(),
                title: this.state.movie
            };
            this.props.add(newMovie);
            this.setState((prevState) => ({
                ...prevState,
                movie: ''
            }));
        }
    };

    onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState((prevState) => ({
            ...prevState,
            movie: e.target.value
        }));
    };

    render() {

        return (
            <>
                <form className="form-add" onSubmit={this.onSubmitForm}>
                    <label className="label-add" htmlFor="username"></label>
                    <input
                        className="input-add"
                        type="text"
                        name="movie-name"
                        id="movieName"
                        value={this.state.movie}
                        onChange={this.onChangeInput}
                    />
                    <button className="btn-add" type="submit">Add</button>
                </form>
            </>
        );
    }
}

export default FormAdd;


