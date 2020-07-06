import React from 'react';

import styled, { ThemeProvider } from 'styled-components'

import { OverlayContext } from '../../OverlayContext';

import { Boxart } from '../../components/Boxart';

import Facecam from './components/Facecam';
import GamepadViewer from './components/GamepadViewer';
import Content from './components/Content';
import Stats from './components/Stats';

const DisplayPlaceholder = styled.div`
  position: fixed;
  width: ${props => props.theme.SCREEN_WIDTH- props.theme.SIDEBAR_WIDTH}px;
  height: ${props => props.theme.SIDEBAR_HEIGHT}px;
`;

const Sidebar = () => {
  const style = {
    position: 'fixed',
    right: 0,
    color: 'white',
  };
  return (
    <div style={style}></div>
  );
};

const Bottom = () => {
  const ctx = React.useContext(OverlayContext);
  const style = {
    position: 'fixed',
    bottom: '0',
  };

  return (
    <span style={style}>{ctx.streamTitle}</span>
  );

};

const Container =  styled.div`
  font-family: "MegaMan 2 Regular";
  color: white;
`;


export const Overlay = () => {
  const ctx = React.useContext(OverlayContext);

  const theme = {
    SCREEN_WIDTH: ctx.SCREEN_WIDTH,
    SCREEN_HEIGHT: ctx.SCREEN_HEIGHT,
    SIDEBAR_WIDTH: ctx.SIDEBAR_WIDTH,
    color1: '#3a3277',
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <DisplayPlaceholder />
        <GamepadViewer />
        <Sidebar />
        <Facecam />
        <Content>
          <Boxart />
        </Content>
        <Stats />
        <Bottom />
      </Container>
    </ThemeProvider>
  );
};

export default Overlay;
