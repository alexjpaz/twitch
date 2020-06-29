import React from 'react';

import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  width: ${props => props.theme.SIDEBAR_WIDTH}px;
  height: 290px;
  border: 4px white solid;
  right: 10px;
  top: 392px;
  overflow: hidden;
`;

const Content = styled.div`
  padding: 10px;
`;


export default function({ children }) {
  return (
    <Container>
      <Content>
        { children }
      </Content>
    </Container>
  );
};
