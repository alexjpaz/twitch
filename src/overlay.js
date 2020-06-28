import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from 'styled-components'

import { OverlayContext } from './OverlayContext';
import MinimalNes from './themes/minimal_nes';

export const Overlay = () => {
  const [ ctx, setCtx ] = React.useState(OverlayContext.defaultValue);

  const theme = {
  };

  return (
    <OverlayContext.Provider value={ctx}>
      <ThemeProvider theme={theme}>
        <MinimalNes />
      </ThemeProvider>
    </OverlayContext.Provider>
  )
};

const root = document.querySelector('#root');

if(root) {
  ReactDOM.render(<Overlay />, root);
}
