import React from 'react';

import styled from 'styled-components'

import deathsimg from '../images/deaths.png';

const Container = styled.div`
  position: absolute;
`;

const DeathsIcon = styled.div`
  height: 32px;
  width: 32px;
  display: inline-block;
  background-image: url(${deathsimg});
  background-size: 32px;
  image-rendering: pixelated;
  overflow: hidden;
`;

const DeathsCounter = styled.span`
  font-size: 16px;
  display: inline-block;
`;

export default function({ children }) {
  const [ deaths, setDeaths ] = React.useState(0);

  React.useEffect(() => {
    const ws = new WebSocket("ws://localhost:4000/stats");

    ws.addEventListener('message', (event) => {
      console.log(123);
      const data = JSON.parse(event.data);

      setDeaths(data.deaths);
    });
  });

  return (
    <Container>
        <DeathsIcon />
        <DeathsCounter>{ deaths.toString().padStart(4, "0") }</DeathsCounter>
    </Container>
  );
}
