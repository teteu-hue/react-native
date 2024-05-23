import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './HomeScreen';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const HomeStack = () => {

    const navigation = useNavigation();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} 
                options={{
                    headerRight: () => (
                        <Pressable onPress={() => navigation.navigate('About') }>
                            <Text>
                                Sobre nós
                            </Text>
                        </Pressable>
                    )
                }}
             />


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
