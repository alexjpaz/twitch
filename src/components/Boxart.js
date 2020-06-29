import React from 'react';
import ReactDOM from 'react-dom';

import styled, { ThemeProvider } from 'styled-components'

import { OverlayContext } from '../OverlayContext';

const Scene = styled.div`
  width: ${props => props.theme.width}px;
  height: ${props => props.theme.height}px;
  perspective: 500px;

  position: absolute;

  right: ${props => props.theme.right}px;
  top: ${props => props.theme.top}px;
`;

const Box = styled.div`
  width: ${props => props.theme.width}px;
  height: ${props => props.theme.height}px;
  position: relative;

  transform-style: preserve-3d;
  transition: transform 5s;
  transition-timing-function: ease-in-out;

  transform: ${props => props.theme.rotation};
`;

const BoxFaceFront = styled.div`
  width: ${props => props.theme.width}px;
  height: ${props => props.theme.height}px;
  background-color: ${props => props.theme.fillColor};
  background-repeat: round;
  background-image: url("${props => props.theme.imageUrl}");
  position: absolute;

  transform:
    translateZ(${props => props.theme.depth}px)
    ;
`;

const BoxFaceBack = styled.div`
  width: ${props => props.theme.width}px;
  height: ${props => props.theme.height}px;
  background-color: ${props => props.theme.fillColor};
  position: absolute;

  transform:
    translateZ(0)
    ;
`;

const BoxFaceTop = styled.div`
  width: ${props => props.theme.width}px;
  height: ${props => props.theme.depth}px;
  background-color: ${props => props.theme.fillColor};
  position: absolute;

  transform:
    rotateX(-90deg)
    translateZ(${props => -props.theme.depth / 2}px)
    translateY(${props => -props.theme.depth / 2}px)
    ;
`;

const BoxFaceBottom = styled.div`
  width: ${props => props.theme.width}px;
  height: ${props => props.theme.depth}px;
  background-color: ${props => props.theme.fillColor};
  position: absolute;

  transform:
    rotateX(-90deg)
    translateZ(${props => props.theme.height - (props.theme.depth / 2)}px)
    translateY(${props => -props.theme.depth / 2}px)
    ;

`;

const BoxFaceRight = styled.div`
  width: ${props => props.theme.depth}px;
  height: ${props => props.theme.height}px;
  position: absolute;
  background-color: ${props => props.theme.fillColor};

  transform:
    rotateY(90deg)
    translateX(${props => -props.theme.depth / 2}px)
    translateZ(${props => props.theme.width - (props.theme.depth/2)}px)
    ;
`;

const BoxFaceLeft = styled.div`
  width: ${props => props.theme.depth}px;
  height: ${props => props.theme.height}px;
  background-color: ${props => props.theme.fillColor};
  position: absolute;

  transform:
    rotateY(90deg)
    translateX(${props => -props.theme.depth / 2}px)
    translateZ(${props => -props.theme.depth / 2}px)
    ;
`;

export const Boxart = () => {
  const ctx = React.useContext(OverlayContext);

  const list = [
    'rotate3d(0, 0, 0, 0deg)',
    'rotate3d(0.10, 1, 0, 30deg)',
    'rotate3d(0.10, 1, 0, -30deg)',
    'rotate3d(0.10, -1, 0, 30deg)',
    'rotate3d(0.10, -1, 0,-30deg)',
  ];

  const pickRotation = () => {
    const pick = list[Math.floor(Math.random() * list.length)];

    return pick;
  };

  const [ rotation, setRotation ] = React.useState(pickRotation());

  React.useEffect(() => {
    const timeoutInterval = 60000;
    let timeoutId = null;

    function tick() {
      const pick = pickRotation();
      setRotation(pick);

      timeoutId = setTimeout(tick, timeoutInterval);
    }

    tick();

    return () => {
      clearTimeout(timeoutId);
    };
  });

  const theme = {
    right: 20,
    top: 20,
    width: 120,
    height: 180,
    depth: 20,
    fillColor: 'grey',
    imageUrl: ctx.boxartUrl,
    rotation,
  };

  return (
    <ThemeProvider theme={theme}>
      <Scene>
        <Box>
          <BoxFaceFront data-test-id='front' />
          <BoxFaceRight data-test-id='right' />
          <BoxFaceLeft data-test-id='left' />
          <BoxFaceTop data-test-id='top' />
          <BoxFaceBottom data-test-id='bottom' />
          <BoxFaceBack data-test-id='back' />
        </Box>
      </Scene>
    </ThemeProvider >
  );
};
