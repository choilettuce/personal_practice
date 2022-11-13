import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import Library from './chapter3/Library';
// import Clock from './chapter04/clock';
import CommentList from './chapter05/CommentList';

ReactDOM.render(
    <React.StrictMode>
      <CommentList/>
    </React.StrictMode>,
    document.getElementById('root')
  );
