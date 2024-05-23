import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ButtonNavigate } from '../../components/Screen/buttonNavigate';

export const SettingsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textHome}>
                Settings!
            </Text>
                <ButtonNavigate page="About" textButton="About" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },  

    textHome: {
        textAlign: 'center',
        fontSize: 16,

    }
});