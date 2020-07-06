import React from 'react';

import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  width: ${props => props.theme.SIDEBAR_WIDTH}px;
  height: 290px;
  right: 10px;
  top: 392px;
  overflow: hidden;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
`;


export default function({ children }) {
  return (
    <Container data-testid='Content'>
      <Content>
        { children }
      </Content>
    </Container>
  );
};
