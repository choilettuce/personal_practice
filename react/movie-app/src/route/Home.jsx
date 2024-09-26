import React,{useEffect, useState} from 'react';
import Movie from '../components/movie';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  
  const getMovies = async () => {
    try {
      const response = await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      );
      const json = await response.json();

      if (json.data && json.data.movies) {  // json.data와 json.data.movies가 존재하는지 확인
        setMovies(json.data.movies);
      } else {
        setMovies([]);  // movies가 없을 경우 빈 배열로 설정
      }
      
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch movies:", error);
      setMovies([]);  // 오류 발생 시에도 빈 배열로 설정
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          {movies.length > 0 ? (
            movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))
          ) : (
            <h2>No movies found</h2>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
