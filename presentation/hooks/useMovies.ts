import {
  nowPlayingAction,
  popularMoviesAction,
  topRatedMoviesAction,
  upcomingMoviesAction,
} from '@/core/actions/movies';
import { useQuery } from '@tanstack/react-query';

export const useMovies = () => {
  // Queries
  const nowPlayingQuery = useQuery({
    queryKey: ['movies', 'nowPlaying'],
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

  const popularQuery = useQuery({
    queryKey: ['movies', 'popular'],
    queryFn: popularMoviesAction,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

  const topRatedQuery = useQuery({
    queryKey: ['movies', 'top-rated'],
    queryFn: topRatedMoviesAction,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });
  const upcomingQuery = useQuery({
    queryKey: ['movies', 'upcoming'],
    queryFn: upcomingMoviesAction,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

  return {
    nowPlayingQuery,
    popularQuery,
    topRatedQuery,
    upcomingQuery,
  };
};
