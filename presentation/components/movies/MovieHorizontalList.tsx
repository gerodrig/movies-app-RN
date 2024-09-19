import { Movie } from '@/infrastructure/interfaces';
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import MoviePoster from './MoviePoster';

interface Props {
  title?: string;
  movies: Movie[];
  className?: string;
}

const MovieHorizontalList = ({ title, movies, className }: Props) => {
  return (
    <View className={`${className}`}>
      {title && <Text className="px-4 mb-2 text-3xl font-bold">{title}</Text>}

      <FlatList
        horizontal
        data={movies}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
      />
    </View>
  );
};

export default MovieHorizontalList;
