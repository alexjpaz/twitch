import React from 'react';
import ReactDOM from 'react-dom';

import styled, { ThemeProvider } from 'styled-components'

const root = document.querySelector('#root');

export const BigNumber = styled.input`
  margin: 1rem;
  padding: 1rem;
  font-size: 3rem;
`;

export const Admin = () => {
  const [ ws, setWs ] = React.useState(null);

  React.useEffect(() => {
    let ws = null;
    let connectTimeoutId = null;
    let uri = "ws://localhost:4000/admin";

    function start() {
      ws = new WebSocket(uri);

      ws.addEventListener('open', (event) => {
        console.info('connected');
        clearTimeout(connectTimeoutId);
        setWs(ws);
      });

      ws.addEventListener('close', (event) => {
        ws = null;
        setWs(ws);

        console.info("Connection closes, retrying...");

        setTimeout(start, 2000);
      });
    }

    start();
  }, [ ]);

  const onChange = (e) => {
    e.stopPropagation();

    ws.send(JSON.stringify({
      type: 'upsert',
      deaths: +e.target.value,
    }));
  }

  if(!ws) {
    return <h1>LOADING</h1>;
  }

  return (
    <div>
      <h1>Deaths</h1>
      <BigNumber type='number' onChange={onChange} />
    </div>
  );
};

if(root) {
  ReactDOM.render(<Admin />, root);
}

