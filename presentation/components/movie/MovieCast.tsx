import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { Cast } from '@/infrastructure/interfaces';
import ActorCard from './ActorCard';

interface Props {
  cast: Cast[];
}

const MovieCast = ({ cast }: Props) => {
  return (
    <View className="mt-5 mb-20">

      <Text className="px-5 mb-2 text-2xl font-bold">Cast</Text>
      <FlatList
        data={cast}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <ActorCard actor={item} />}
      />
    </View>
  );
};

export default MovieCast;
