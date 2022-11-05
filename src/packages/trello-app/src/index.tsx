import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { CrafterCMSNextBridge } from '@craftercms/studio-ui';
import App from './components/App';

const element = document.createElement('div');
const root = createRoot(element);

document.body.appendChild(element);

root.render(
  <CrafterCMSNextBridge>
    <App />
  </CrafterCMSNextBridge>
);
