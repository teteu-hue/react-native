import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ButtonNavigate } from '../../components/Screen/ButtonNavigate';

export const SettingsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textHome}>
                Settings!
            </Text>
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