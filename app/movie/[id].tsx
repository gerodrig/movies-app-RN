import { ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import { useMovie } from '@/presentation/hooks/useMovie';
import Loader from '@/presentation/components/shared/Loader';
import MovieHeader from '@/presentation/components/movie/MovieHeader';
import MovieDescription from '@/presentation/components/movie/MovieDescription';
import MovieCast from '@/presentation/components/movie/MovieCast';

const MovieScreen = () => {
  const { id } = useLocalSearchParams();

  const { movieQuery, castQuery } = useMovie(+id);

  if (movieQuery.isLoading || !movieQuery.data) {
    return <Loader />;
  }

  return (
    <ScrollView >
      <MovieHeader
        poster={movieQuery.data.poster}
        originalTitle={movieQuery.data.originalTitle}
        title={movieQuery.data.title}
      />

      {/* Movie Descritption */}
      <MovieDescription movie={movieQuery.data} />


      {/* Movie Cast */}
      <MovieCast cast={castQuery.data ?? []} />
    </ScrollView>
  );
};

export default MovieScreen;
