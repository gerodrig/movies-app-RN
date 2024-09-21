import { movieApi } from '@/core/api/movie-api';
import { CompleteMovie } from '@/infrastructure/interfaces';
import { MovieDBMovieResponse } from '@/infrastructure/interfaces/movidedb-movie.response';
import { MovieMapper } from '@/infrastructure/mappers';

export const getMovieByIdAction = async (
  id: number | string
): Promise<CompleteMovie> => {
  try {
    const { data } = await movieApi.get<MovieDBMovieResponse>(`/${id}`);

    const movie = MovieMapper.fromTheMovieDBToCompleteMovie(data);
    return movie;
  } catch (error) {
    throw new Error('Error fetching movie details for movie with id: ' + id);
  }
};
