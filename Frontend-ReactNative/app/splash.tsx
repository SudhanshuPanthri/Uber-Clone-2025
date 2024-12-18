import { Link, router } from 'expo-router';
import { Button, Image, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useSession } from '../ctx';
import AppLoading from 'expo-app-loading';
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
import AntDesign from '@expo/vector-icons/AntDesign';
import { Platform } from 'react-native';

export default function Splash() {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold, Poppins_900Black
    });
    const image = { uri: "https://media.self.com/photos/5fa9c6976f667bbd3bba110e/master/pass/roadtrip_drive.jpeg" };
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 8 }}>
                <ImageBackground source={image} resizeMode='cover' style={{ flex: 1 }}>
                    {/* <Text style={styles.text}>Inside</Text> */}
                    <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" }} style={{ width: 85, height: 30, marginTop: 35, marginLeft: 15, tintColor: "#fff" }} />
                </ImageBackground>
            </View>
            <View style={{ flex: 2, backgroundColor: 'white', padding: 10 }}>
                <Text style={{ fontSize: 28, textAlign: "left", fontFamily: "Poppins_600SemiBold", marginTop: 15 }}>Get Started with Uber</Text>
                <TouchableOpacity onPress={() => {
                    router.replace("/sign-in");
                }}>
                    <View style={styles.buttonWrapper}>
                        <Text style={styles.button}>Sign In</Text>
                        <AntDesign name="right" size={20} color="white" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonWrapper: {
        padding: 15,
        borderWidth: 1,
        bottom: -30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
        flexDirection:"row",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    button: {
        fontSize: 18,
        fontFamily: "Poppins_500Medium",
        borderRadius: 16,
        color: "#fff",
        width:"90%",
    }
});