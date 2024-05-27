import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SingInText = () => {
    return (
        <View style={styles.divAccount}>
            <Text style={styles.textAccount}>Create an account</Text>
            <Text style={styles.textEmail}>Enter your email to sing up for this app</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    divAccount: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    textAccount: {
        fontFamily: 'Inter-Medium',
        fontSize: 18
    },
    textEmail: {
        fontFamily: 'Inter-Regular',
        fontSize: 16
    }
});

export { SingInText };