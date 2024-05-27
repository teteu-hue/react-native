import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SingInTitle } from './components/SingInTitle';
import { SingInText } from './components/SingInText';

export const SingInScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleView}>
                <SingInTitle />
            </View>
            <View style={styles.titleView}>
                <SingInText />
            </View>
            <View style={styles.titleView}>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        width: '100%',
        height: '100%'
    },
    titleView: {
        flex: 1,
        justifyContent: 'center',
        height: '50%',
    }
});