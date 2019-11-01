import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

class Home extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.setState({
                    posts: res.data.slice(0, 10)
                })
            });
    }

    render() {
        const { posts } = this.state;
        return (
            <div>
                <h1 className="center">Home</h1>
                { posts.length ? (
                    <ul className="list-unstyled list-group">
                        { posts.map(post => (
                            <li className="list-group-item" key={ post.id }>
                                <Link to={ `/${post.id}` }>
                                    <h2 className="post-title">{ post.title }</h2>
                                    <p className="post-content">{ post.body }</p>
                                </Link>
                            </li>
                        )) }
                    </ul>
                ) : (
                    <div className="text-center">There are not posts yet</div>
                ) }
            </div>
        )
    }
}

export default Home;
