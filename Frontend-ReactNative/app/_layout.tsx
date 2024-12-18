import { Slot } from 'expo-router';
import { SessionProvider } from '../ctx';
import { StatusBar } from 'react-native';

export default function Root() {
  // Set up the auth context and render our layout inside of it.
  return (
    <SessionProvider>
      <StatusBar translucent backgroundColor="transparent" />
      <Slot />
    </SessionProvider>
  );
}
