import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../components/Home.js';
import Counter from '../components/Counter.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
});


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Counter />, div);
});
