import React from 'react';
import './LevelOne.css'

interface State {
  movie: string;
}
class LevelOne extends React.Component<{}, State> {
    state: State = {
        movie: ''
    };

    onSubmitForm (e:React.FormEvent) {
        e.preventDefault();
        console.log("form");
    }

    toMovie = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState((prevState) => ({
            ...prevState,
            movie: e.target.value }))
        console.log(this.state.movie)
    }
    render() {
        return (
            <div className="container">
             <form className="form-add" onSubmit={this.onSubmitForm}>
                 <label className="label-add"  htmlFor="username"></label>
                 <input className="input-add" type="text" name="movie-name" id="movieName" onChange={this.toMovie}/>
                 <button className="btn-add" type="submit"> Add</button>
             </form>
            </div>
        );
    }
}

export default LevelOne;