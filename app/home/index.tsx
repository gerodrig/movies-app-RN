import { View, Text, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useMovies } from '@/presentation/hooks/useMovies';
import Loader from '@/presentation/components/shared/Loader';
import MainSlideshow from '@/presentation/components/movies/MainSlideshow';
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList';

const HomeScreen = () => {
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } =
    useMovies();
  const safeArea = useSafeAreaInsets();

  if (
    nowPlayingQuery.isLoading ||
    !nowPlayingQuery.data ||
    !popularQuery.data ||
    !topRatedQuery.data ||
    !upcomingQuery.data
  ) {
    return <Loader />;
  }

  return (
    <ScrollView>
      <View className="pb-10 mt-2" style={{ paddingTop: safeArea.top }}>
        <Text className="px-4 mb-2 text-3xl font-bold">Movies App</Text>

        {/* Image slider */}
        {/* Now playing movies */}
        <MainSlideshow movies={nowPlayingQuery.data} />

        {/* Popular movies */}
        <MovieHorizontalList
          title="Popular Movies"
          movies={popularQuery.data}
          className="mb-5"
        />

        {/* Top rated movies */}
        <MovieHorizontalList
          title="Top Rated Movies"
          movies={topRatedQuery.data?.pages.flat()}
          className="mb-5"
          loadNextPage={topRatedQuery.fetchNextPage}
        />
        {/* Upcoming movies */}
        <MovieHorizontalList
          title="Upcoming Movies"
          movies={upcomingQuery.data}
          className="mb-5"
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
