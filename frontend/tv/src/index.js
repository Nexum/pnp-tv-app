import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

global.React = React;

ReactDOM.render(
    <App/>,
    document.getElementById('root'),
);