import React from 'react';

import styled, { ThemeProvider } from 'styled-components';

const Wrapper = styled.iframe`
  border: 0;
  position: fixed;
  top: 0;
  left: 0;
`;

export const GamepadViewer = ({ css }) => {
  const src = `https://gamepadviewer.com/?css=${css}&p=1&s=3&smeter=1&sc=1&map=%7B%22mapping%22%3A%5B%7B%22targetType%22%3A%22buttons%22%2C%22target%22%3A%221%22%2C%22disabled%22%3Afalse%2C%22choiceType%22%3A%22buttons%22%2C%22choice%22%3A%220%22%7D%2C%7B%22targetType%22%3A%22buttons%22%2C%22target%22%3A%220%22%2C%22disabled%22%3Afalse%2C%22choiceType%22%3A%22buttons%22%2C%22choice%22%3A%221%22%7D%2C%7B%22targetType%22%3A%22buttons%22%2C%22target%22%3A%2212%22%2C%22disabled%22%3Afalse%2C%22choiceOperand%22%3A%22-%22%2C%22choiceType%22%3A%22axes%22%2C%22choice%22%3A%221%22%7D%2C%7B%22targetType%22%3A%22buttons%22%2C%22target%22%3A%2213%22%2C%22disabled%22%3Afalse%2C%22choiceOperand%22%3A%22%2B%22%2C%22choiceType%22%3A%22axes%22%2C%22choice%22%3A%221%22%7D%2C%7B%22targetType%22%3A%22buttons%22%2C%22target%22%3A%2214%22%2C%22disabled%22%3Afalse%2C%22choiceOperand%22%3A%22-%22%2C%22choiceType%22%3A%22axes%22%2C%22choice%22%3A%220%22%7D%2C%7B%22targetType%22%3A%22buttons%22%2C%22target%22%3A%2215%22%2C%22disabled%22%3Afalse%2C%22choiceOperand%22%3A%22%2B%22%2C%22choiceType%22%3A%22axes%22%2C%22choice%22%3A%220%22%7D%5D%7D`;

  return (
    <Wrapper src={src}>

    </Wrapper>
  );
};
