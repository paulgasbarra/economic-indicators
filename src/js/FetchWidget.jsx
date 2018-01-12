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
        'Access-Control-Allow-Origin' : '',
        'api-key': 'ea2df5ca8ccc4705801f9c81c24aa754',
      }
    }

    const params = {
      'api-key': 'ea2df5ca8ccc4705801f9c81c24aa754',
      'limit': 5
    }
    const apiKey = "?api-key=ea2df5ca8ccc4705801f9c81c24aa754"

    const url = `${this.props.url}${this.props.subreddit}${this.props.format}`
    axios.get(url+apiKey, params)
      .then(res => {
        console.log(res.data.results[0].title)
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
