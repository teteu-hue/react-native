import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SingInTitle = () => {
    return (
        <View style={styles.textView}>
            <Text style={styles.textPrincipal}>FoundCare</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textView: {
        marginBottom: 100,
    },
    textPrincipal: {
        fontFamily: 'Inter-Medium',
        fontSize: 48
    }
});

export { SingInTitle };