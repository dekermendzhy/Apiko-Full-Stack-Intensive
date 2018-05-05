import React from 'react';
import styled from 'styled-components';

const PostListItem = props => {
  return (
    <Wrapper>{props.id}
      <h2>{props.title}</h2>
      <div>
        <p>{props.body}</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: block;
	border: 1px solid #ccc;
	box-shadow: 3px 3px 3px #ccc;
	margin: 30px 30px 0 30px;
	padding: 10px;
`;

export default PostListItem;