import React from 'react';

import styled from 'styled-components'

const Outline = styled.div`
  position: fixed;
  width: ${props => props.theme.SIDEBAR_WIDTH}px;
  height: ${props => props.theme.SIDEBAR_WIDTH}px;
  border: 4px white solid;
  right: 10px;
  top: 10px;
`
export const Facecam = () => {
  return (
    <Outline />
  );
};

export default Facecam;

