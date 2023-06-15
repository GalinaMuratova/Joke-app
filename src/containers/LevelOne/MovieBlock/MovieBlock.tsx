import React, {Component} from 'react';

interface Props {
    value: string;
    delete: () => void;
}
class MovieBlock extends Component<Props> {
    render() {
        return (
            <>
                <div className='card-movie'>
                    <input className="input-form-edit" value={this.props.value}/>
                    <button className="btn-delete" onClick={this.props.delete}>Delete</button>
                </div>
            </>
        );
    }
}

export default MovieBlock;