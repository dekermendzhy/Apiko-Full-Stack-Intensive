import React from 'react';
import styled from 'styled-components';

const MoreButton = props => {
  return (
    <Button onClick={props.click}>Click Me</Button>
  )
};

const Button = styled.button`
  padding: 10px 25px;
  margin: 20px 0;
  font-size: 15px;
`;

export default MoreButton;