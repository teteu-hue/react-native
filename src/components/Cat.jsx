import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const Cat = ({name}) => 
{
    const [isHungry, setIsHungry] = useState(true);

    return (
        <View>
            <Image
                {...isHungry ? {source:{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}} : {source: {uri: 'https://reactnative.dev/docs/assets/p_cat1.png'}}}
                
                style={{
                    width: 200, height: 200
                }}
                />
                <Text>My name is: {name}</Text>
                <Text>I am {isHungry ? 'Hungry' : 'Full'}! </Text>
            
                <Button 
                    onPress={() => {
                        setIsHungry(false);
                    }}
                    disabled={!isHungry}
                    title={isHungry ? 'Give me food mother fucker!' : 'Thank you!'}
                />

        </View>
    );
}

const styles = StyleSheet.create({

});

export { Cat };