import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import TodoList from './TodoList';
// import CoinTracker from './CoinTracker';
import Home from './route/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <TodoList />
    <CoinTracker /> */}
    <Home/>
  </React.StrictMode>
);

