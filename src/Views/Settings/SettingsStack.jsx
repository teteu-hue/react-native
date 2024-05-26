import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AboutScreen } from '../About/AboutScreen';
import { SettingsScreen } from './SettingsScreen';

const Stack = createNativeStackNavigator();

export const SettingsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    textHome: {
        textAlign: 'center',
        fontSize: 16,
        
    }
});