import React from "react";
import { gql, useQuery } from '@apollo/client';

const movies = gql`
  query getTitles {
    getTitles {
      title
      thumbnail
    }
  }
`;

const MoviesList = () => {
  const { loading, error, data } = useQuery(movies);
  if(loading) return <p>Loading movies...</p>
  if(error) return <p>Error loading movies!</p>

  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {data.getTitles.map(({title, thumbnail}) => {
        return (
          <div className="col">
            <div key={title} className="card">
              <img src={thumbnail} className="card-img-top" alt="movieImg" />
              <div className="card-body" style={{textAlign: "center"}}>
                <h3 className="card-title">{title}</h3>
              </div>
            </div>
          </div>
        )
      })
  }
    </div>
  )
}

export function Home() {
  return(
    <>
      <header className="badge-expand-lg bg-primary text-light">
        <h1 className="text-center">Demo Streaming</h1>
      </header>
      <MoviesList />
    </>
  );
}