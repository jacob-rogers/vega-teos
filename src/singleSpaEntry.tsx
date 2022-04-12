import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact, { SingleSpaReactOpts } from 'single-spa-react';

import './set-public-path';

import App from './app/App';

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  suppressComponentDidCatchWarning: true,
} as SingleSpaReactOpts<unknown>);

export const { bootstrap, mount, unmount } = lifecycles;
