import React from 'react';
import reactDom from 'react-dom';

import App from './routes/App';

const root = reactDom.createRoot(document.getElementById('app'));
root.render(<App />);
