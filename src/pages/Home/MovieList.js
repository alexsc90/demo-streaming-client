import React from 'react';
import { useQuery } from '@apollo/client';
import { getMovies } from './queries';

const MovieList = () => {
  const { loading, error, data } = useQuery(getMovies);
  if(loading) return <p>Loading movies...</p>
  if(error) return <p>Error loading movies!</p>

  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {data.getTitles.map(({title, thumbnail}) => {
        return (
          <div key={title} className="col w-25">
            <div className="card">
              <img src={thumbnail} className="card-img-top" alt="movieImg" />
              <div className="card-body" style={{textAlign: "center"}}>
                <h3 className="card-title">{title}</h3>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MovieList;