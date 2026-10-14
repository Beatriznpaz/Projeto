import React from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import logoPolvo from '../../assets/logo-polvo.png';
import { style } from './styles';

export default function Splash({ navigation }: any) {
    function irParaLogin() {
        navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
    }

    return (
        <TouchableWithoutFeedback onPress={irParaLogin}>
            <LinearGradient colors={['#1B4B47', '#5FBDB0']} style={style.container}>
                <View style={style.logoContainer}>
                    <Image source={logoPolvo} style={style.logoImage} />
                    <View style={style.line} />
                    <Text style={style.logoText}>+ Study</Text>
                </View>
            </LinearGradient>
        </TouchableWithoutFeedback>
    );
}