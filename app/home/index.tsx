import { View, Text } from 'react-native';
import React from 'react';
import { useMovies } from '@/presentation/hooks/useMovies';
import Loader from '@/components/shared/Loader';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const { nowPlayingQuery } = useMovies();
  const safeArea = useSafeAreaInsets();

  return (
    <View className="mt-2" style={{ paddingTop: safeArea.top }}>
      <Text className="px-4 mb-2 text-3xl font-bold">HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
