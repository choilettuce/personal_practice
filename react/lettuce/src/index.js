import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import Library from './chapter3/Library';
// import Clock from './chapter04/clock';
// import CommentList from './chapter05/CommentList';
import NotificationList from './chapter06/NotificationList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NotificationList/>
  </React.StrictMode>
);
