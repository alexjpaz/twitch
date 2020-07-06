import React from 'react';
import ReactDOM from 'react-dom';

import paz from '../assets/paz.png';

export const Overlay = () => {
  return (
    <div>
      <img src={paz} />
      <audio autoPlay src='http://public.alexjpaz.com/music/Primitive Rule.ogg'></audio>
    </div>
  );
};

const root = document.querySelector('#root');

if(root) {
  ReactDOM.render(<Overlay />, root);
}
