import React from 'react';
import { Overlay } from './overlay';

export default {
  title: 'Overlay',
};

export const withDefault = () => (
  <div style={{"width":"1280px","height":"720px"}}>
    <Overlay />
  </div>
);
