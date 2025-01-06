import { Slot } from 'expo-router';
import { SessionProvider } from '../ctx';
import { StatusBar } from 'react-native';
import { AuthProvider } from '@/context/ctx';

export default function Root() {
  // Set up the auth context and render our layout inside of it.
  return (
    <AuthProvider>
      <StatusBar translucent backgroundColor="transparent" />
      <Slot />
    </AuthProvider>
  );
}
