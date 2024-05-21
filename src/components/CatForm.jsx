import React from "react";
import { TextInput, StyleSheet } from 'react-native';

const CatForm = () => 
{
    return (
        <TextInput style={styles.container}  
            defaultValue="What's is my name? "
        />
    );
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    }
});

export { CatForm };
