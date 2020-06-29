import React from 'react';

const defaultValueProvider = () => {
  return {
    username: "alexanderthepaz",
    streamTitle: "castlevania - the many deaths of simon belmont",
    boxartUrl: "https://www.speedrun.com/themes/cv1/cover-256.png?version=",
    SCREEN_WIDTH: 1280,
    SCREEN_HEIGHT: 720,
    SIDEBAR_WIDTH: 334,
  };
};

const defaultValue = defaultValueProvider();

export const OverlayContext = React.createContext(defaultValue);

OverlayContext.defaultValue = defaultValue;
