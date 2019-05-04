import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app.jsx';
import movies from '../data/data.js';


ReactDOM.render(<App movies={movies} />, document.getElementById('app'));