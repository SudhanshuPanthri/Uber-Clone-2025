import { router } from 'expo-router';
import { Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import { useSession } from '../ctx';

export default function SignIn() {
  const { signIn } = useSession();

  return(
    <View>
      <Text onPress={()=>{
        signIn();
        router.replace("/");
      }}>Sign In</Text>
    </View>
  )
}