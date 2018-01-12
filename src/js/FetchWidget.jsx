import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class FetchWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    var config = {
      headers: {
        'Access-Control-Allow-Origin' : '*'
      }
    }
    const url = `${this.props.url}${this.props.subreddit}${this.props.format}`
    axios.get(url)
      .then(res => {
        const posts = res.data.data.children.map(obj => obj.data);
        this.setState({ posts });
      });
  }

  render() {
    return (
      <div>
        <h1>{`/r/${this.props.subreddit}`}</h1>
        <ul>
          {this.state.posts.map(post =>
            <li key={post.id}>{post.title}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default FetchWidget
