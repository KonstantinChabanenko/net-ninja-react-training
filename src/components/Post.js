import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
    state = {
        currentPost: {}
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.postId}`)
            .then(res => {
                this.setState({
                    currentPost: res.data
                });
            });
    }
    
    render() {
        const { currentPost } = this.state;
        return (
            <div className="container">
                <h2>{ currentPost.title }</h2>
                <p>{ currentPost.body }</p>
            </div>
        )
    }
}

export default Post;
