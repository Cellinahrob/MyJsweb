import React, {Component} from 'react';
import Post from './Post';

class Posts extends Component{
    render () {
        return (
            <div className="col-8">
                <h1>Latest posts</h1>
                {
                    this.props.posts.map(post => {
                        return <Post key={post.id} post={post} />
                    })
                }
            </div>
        )
    }
}

export default Posts;