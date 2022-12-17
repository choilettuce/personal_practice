import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TodoList from './TodoList';
import CoinTracker from './CoinTracker';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoList />
    <CoinTracker />
  </React.StrictMode>
);

