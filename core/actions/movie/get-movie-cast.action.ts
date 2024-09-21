import { movieApi } from '@/core/api/movie-api';
import { CastMapper } from '@/infrastructure/mappers/cast.mapper';
import type { Cast, MovieDBCreditsResponse } from '@/infrastructure/interfaces';

export const getMovieCastAction = async (movieId: number): Promise<Cast[]> => {
  try {
    const { data } = await movieApi.get<MovieDBCreditsResponse>(
      `/${movieId}/credits`
    );

    const cast = data.cast.map(CastMapper.fromMovieDBCastToEntity);
    return cast;
  } catch (error) {
    throw new Error('Error fetching movie cast');
  }
};
