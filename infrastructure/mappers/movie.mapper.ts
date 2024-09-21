import {
  CompleteMovie,
  Movie,
  MovieDBMovieResponse,
  Result,
} from '../interfaces';

export class MovieMapper {
  static fromTheMovieDBToMovie = (movie: Result): Movie => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date),
      poster: 'https://image.tmdb.org/t/p/w500' + movie.poster_path,
      backdrop: 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path,
      rating: movie.vote_average,
    };
  };

  static fromTheMovieDBToCompleteMovie = (
    movie: MovieDBMovieResponse
  ): CompleteMovie => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date),
      poster: 'https://image.tmdb.org/t/p/w500' + movie.poster_path,
      backdrop: 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path,
      rating: movie.vote_average,
      genres: movie.genres.map((genre) => genre.name),
      duration: movie.runtime,
      budget: movie.budget,
      originalTitle: movie.original_title,
      productionCompanies: movie.production_companies.map(
        (company) => company.name
      ),
    };
  };
}
