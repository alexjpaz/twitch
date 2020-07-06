import React from 'react';

import styled from 'styled-components'

import deathsimg from '../images/deaths.png';

const Container = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
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
    let connectTimeoutId = null;
    let ws = null;
    let uri = "ws://localhost:4000/stats";

    function start() {
      ws = new WebSocket(uri);

      ws.addEventListener('open', (event) => {
        clearTimeout(connectTimeoutId);
      });

      ws.addEventListener('message', (event) => {
        console.log(123, event.data);
        const data = JSON.parse(event.data);
        setDeaths(data.deaths);
      });

      ws.addEventListener('close', (event) => {
        ws = null;

        console.info("Connection closes, retrying...");

        setTimeout(start, 2000);
      });
    }

    start();

    return () => {
      clearTimeout(connectTimeoutId);
    };
  }, [ ]);

  return (
    <Container>
        <DeathsIcon />
        <DeathsCounter>{ deaths.toString().padStart(4, "0") }</DeathsCounter>
    </Container>
  );
}
