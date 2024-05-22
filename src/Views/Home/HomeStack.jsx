import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './HomeScreen';
import { AboutScreen } from '../About/AboutScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="About" component={AboutScreen}/>
        </Stack.Navigator>
        
    );

};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    logo: {
        width: 200,
        height: 200
    },
    botao: {
        width: 150,
        height: 40,
        backgroundColor: '#89CEFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    botaoText: {
        color: '#FFF'
    }
});

export { HomeStack };
