import { router } from 'expo-router';
import { Button, Image, ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';

import { useSession } from '../ctx';
import { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let [fontsLoaded] = useFonts({
    Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold, Poppins_900Black
  });

  const { signIn } = useSession();

  const onSubmit = () => {
    setEmail("");
    setPassword("");
    signIn();
    router.replace("/");
  }
  return (
    <View>
      <View>
        <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" }} style={{ width: 85, height: 30, marginTop: 45, marginLeft: 15 }} />
        <View style={{ padding: 10, marginTop: 50 }}>
          <Text style={styles.label}>What's your Email ?</Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder='abc@example.com'
          />
          <Text style={styles.label1}>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder='Enter Password'
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={{ color: "#fff", fontSize: 18 }}>Login</Text>
        <AntDesign name="right" size={20} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {
        router.replace('/');
      }}>
        <Text style={{ color: "#fff", fontSize: 18 }}>Create New Account (User)</Text>
        <AntDesign name="right" size={20} color="white" />
      </TouchableOpacity>
      <View>
        <TouchableOpacity style={styles.button1} onPress={() => {
          router.replace('/captain-login');
        }}>
          <Text style={{ color: "#fff", fontSize: 18 }}>Sign in as Captain</Text>
          <AntDesign name="car" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#eeeeee",
    fontSize: 20,
    fontFamily: "Poppins_400Regular",
    padding: 15,
  },
  label: {
    fontSize: 26,
    fontFamily: "Poppins_500Medium",
    marginBottom: 10
  },
  label1: {
    fontSize: 26,
    fontFamily: "Poppins_500Medium",
    marginTop: 20,
    marginBottom: 10
  },
  button: {
    backgroundColor: "#000",
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10
  },
  button1: {
    backgroundColor: "#10b461",
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10
  }
})