import '../global.css';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack } from 'expo-router';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { nowPlayingAction } from '@/core/actions/movies/now-playing.action';

// Create a client
const queryClient = new QueryClient();

const RootLayout = () => {
  nowPlayingAction();
  return (
    <GestureHandlerRootView>
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </QueryClientProvider>


    </GestureHandlerRootView>
  );
};

export default RootLayout;
