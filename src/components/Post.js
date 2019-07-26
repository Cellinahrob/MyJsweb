import React, {Component} from 'react';

class Post extends Component{
    render () {
        return (
            <div className="card mb-2">
                <div className="card-body">
                    <h5 className="card-title">{this.props.post.title}</h5>
                    <p className="card-text">{this.props.post.name}</p>
                </div>
            </div>
        )
    }
}

export default Post;