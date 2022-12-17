import React,{useEffect, useState} from 'react';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect (() => {
    fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
    .then((response) => response.json())
    .then((json) => console.log(json));
  })
  return (
    <div>
      {loading ? <h1>loading...</h1> : null}
    </div>
  );
}

export default App;
