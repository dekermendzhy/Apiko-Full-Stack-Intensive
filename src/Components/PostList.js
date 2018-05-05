import React from 'react';
import PostListItem from './PostListItem';

const PostList = props => {
  const listItem = props.data.map(p => {
    return (
      <PostListItem
        key={p.id}
        title={p.title}
        body={p.body}
      />
    )
  })

  return (
    <div>
      {listItem}
    </div>
  )
};

export default PostList;