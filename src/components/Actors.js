import React from 'react';
import { actors } from '../data';

const AllActorsData = () => {
  return(
    actors.map(actor => {
      return <div>
              <h3>Name: {actor.name}</h3>
              <p>Movies: </p>
              <ul>{actor.movies.map(movie => <li>{movie}</li>)}</ul>
             </div>
    })
  )
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {AllActorsData()}
    </div>
  );
};

export default Actors;
