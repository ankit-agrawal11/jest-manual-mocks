import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { RenderTotal } from './components/RenderTotal';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RenderTotal />, document.getElementById('root'));
registerServiceWorker();
