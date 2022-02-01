import { gql } from '@apollo/client';

const getMovies = gql`
  query getTitles {
    getTitles {
      title
      thumbnail
    }
  }
`;

export { getMovies };

