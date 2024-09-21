import { View, Text, Image } from 'react-native';

import { Cast } from '@/infrastructure/interfaces';

interface Props {
  actor: Cast;
}

const ActorCard = ({ actor }: Props) => {
  return (
    <View className="mx-10 w-[60px]">
      <Image
        source={{ uri: actor.avatar }}
        className="w-[100px] h-[150px] rounded-2xl shadow"
        resizeMode="cover"
      />

      <View>
        <Text
          numberOfLines={2}
          adjustsFontSizeToFit
          className="text-lg font-bold"
        >
          {actor.name}
        </Text>
        <Text className="text-xs text-gray-600">{actor.character}</Text>
      </View>
    </View>
  );
};

export default ActorCard;
