import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

export const SingInScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleView}>
                <View style={styles.textView}>
                    <Text style={styles.textPrincipal}>FoundCare</Text>
                </View>
            </View>
            <View style={styles.titleView}>
                <Text>SingIn</Text>
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        width: '100%',
        height: '100%'
    },
    titleView: {
        flex: 1,
        justifyContent: 'center'
        
    },
    textView: {
        marginBottom: 150
    },
    textPrincipal: {
        fontFamily: 'Inter-Light',
        fontSize: 48
    }
});