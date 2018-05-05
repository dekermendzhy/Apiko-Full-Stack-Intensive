import React, { Component } from 'react';
import styled from 'styled-components';

import PostList from './Components/PostList';
import MoreButton from './Components/MoreButton';

import data from './posts.json';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };

    this.loadData = this.loadData.bind(this);
  }

  loadData() {
    const newPosts = data.slice(0, 10)
    this.setState(prevState => ({
      posts: prevState.posts.concat(newPosts)
    }));
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    return (
      <Wrapper>
        <h1>Posts</h1>
        <PostList data={this.state.posts} />
        <MoreButton click={this.loadData} />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  text-align: center;
`;

export default App;