import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import Library from './chapter3/Library';
import Clock from './chapter04/clock';

const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(() => {
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>
  );
})