import React from 'react';

interface Props {
    valueMovie: string;
    delete: () => void;
    edit: (newTitle: string) => void;
}

class MovieBlock extends React.Component<Props> {
    changeElement: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const newTitle = e.target.value;
        this.props.edit(newTitle);
    };

    shouldComponentUpdate(nextProps: Props): boolean {
        if (nextProps.valueMovie !== this.props.valueMovie) {
            return true;
        }
        return false;
    }

    render() {
        return (
            <div className="card-movie">
                <input
                    type="text"
                    className="input-form-edit"
                    value={this.props.valueMovie}
                    onChange={this.changeElement}
                />
                <button className="btn-delete" onClick={this.props.delete}>
                    Delete
                </button>
            </div>
        );
    }
}

export default MovieBlock;

