import React from 'react';
import { View, ActivityIndicator } from 'react-native';

interface Props {
  color?: 'blue' | 'purple' | 'red' | 'green';
  size?: 'small' | 'large' | number;
}

const Loader = ({ color = 'blue', size = 'small' }: Props) => {
  return (
    <View className="items-center justify-center flex-1">
      <ActivityIndicator color={color} size={size} />
    </View>
  );
};

export default Loader;
