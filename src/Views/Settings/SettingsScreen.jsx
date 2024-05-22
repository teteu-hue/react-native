import React from 'react';
import { StyleSheet, Text} from 'react-native';
import { ButtonNavigate } from '../../components/Screen/buttonNavigate';

export const SettingsScreen = () => {
    return (
        <Text style={styles.textHome}>
            Settings!
            <ButtonNavigate page="About" />
        </Text>
    );
};

const styles = StyleSheet.create({
    textHome: {
        textAlign: 'center',
        fontSize: 16,
        
    }
});