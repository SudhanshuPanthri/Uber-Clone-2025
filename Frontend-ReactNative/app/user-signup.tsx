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
import { useState, useEffect } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useAuth } from '@/context/ctx';

export default function UserSignup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    let [fontsLoaded] = useFonts({
        Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold, Poppins_900Black
    });

    const { signInUser } = useAuth();

    const onSubmit = ({ email, password }: { email: string; password: string }) => {
        const data = { email: email, password: password };
        signInUser(data);
        console.log(data);
        router.replace("/");
    }

    return (
        <View>
            <View>
                <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" }} style={{ width: 85, height: 30, marginTop: 45, marginLeft: 15 }} />
                <View style={{ padding: 10, marginTop: 50 }}>
                    <Text style={styles.label}>What's your Name ?</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 20, marginBottom: 12 }}>
                        <TextInput
                            style={styles.inputsm}
                            value={firstName}
                            onChangeText={(text) => setFirstName(text)}
                            placeholder='First Name'
                            autoCapitalize='none'
                            autoCorrect={false}
                        />
                        <TextInput
                            style={styles.inputsm}
                            value={lastName}
                            onChangeText={(text) => setLastName(text)}
                            placeholder='Last Name'
                            autoCapitalize='none'
                            autoCorrect={false}
                        />
                    </View>
                    <Text style={styles.label}>What's your Email ?</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        placeholder='abc@example.com'
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='email-address'
                    />
                    <Text style={styles.label1}>Password</Text>
                    <TextInput
                        style={styles.input}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        placeholder='Enter Password'
                        secureTextEntry={true}
                        autoCapitalize='none'
                        autoCorrect={false}
                    />
                    <Text style={styles.label1}>Confirm Password</Text>
                    <TextInput
                        style={styles.input}
                        value={password}
                        onChangeText={(text) => setConfirmPassword(text)}
                        placeholder='Confirm Password'
                        secureTextEntry={true}
                        autoCapitalize='none'
                        autoCorrect={false}
                    />
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => onSubmit({ email, password })}>
                <Text style={{ color: "#fff", fontSize: 18 }}>Sign Up</Text>
                <AntDesign name="right" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {
                router.replace('/user-login');
            }}>
                <Text style={{ color: "#fff", fontSize: 18 }}>Already have an account</Text>
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
        fontSize: 18,
        fontFamily: "Poppins_400Regular",
        padding: 12,
    },
    inputsm: {
        backgroundColor: "#eeeeee",
        fontSize: 18,
        fontFamily: "Poppins_400Regular",
        width: "48%"
    },
    label: {
        fontSize: 22,
        fontFamily: "Poppins_500Medium",
        marginBottom: 10
    },
    label1: {
        fontSize: 22,
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
        backgroundColor: "#df622d",
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