import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Box } from '@shopify/react-native-skia';
import { Card, Title, Paragraph } from 'react-native-paper';

import Doublecheese from './images/Doublecheese.png'
import filledstar from './images/filledstar.png'
import youmaylike1 from './images/youmaylike1.jpg'
import youmaylike2 from './images/youmaylike2.png'
import deliverytime from './images/deliverytime.png'
import minus from './images/minus.png'
import plus from './images/plus.png'

export default function Burgerpage2({ navigation }) {
    return (
        <View style={styles.container}>

            <Box style={styles.box1}>
                <Image source={Doublecheese} style={styles.image} />
            </Box>

            <Box style={{ marginTop: 25}}>
                <Text style={{ color: 'white' }}>Double Cheese Burger</Text>

                <Text style={{ color: 'white', marginLeft: 100 }}>R150</Text>

                <Box style={{display: 'flex', marginTop: 10}}>
                    <Box style={{ display: 'flex' }}>
                        <Image source={deliverytime} style={{ width: 20, height: 20 }} />
                        <Text style={{ color: 'white', marginLeft: 2 }}>40 min</Text>
                    </Box>

                    <Image source={filledstar} style={{ width: 20, height: 20, marginLeft: 155 }} />
                    <Text style={{ color: 'white', paddingLeft: 10 }}>4.5</Text>
                </Box>
            </Box>
            
            <Text style={{ color: 'white', marginTop: 19, marginLeft: 5 }}>This double cheese burger uses classic cheese <br></br> with 100% quality beef,
                sliced tomatoes, fresh <br></br> lettuce, onions, pickels, and home made sauces.
            </Text>

            <Box style={{ marginTop: 30}}>
            <Text style={{color: 'white', marginLeft: 10}}>You may also like</Text>

            <Box style={{ display: 'flex', marginLeft: 15 }}>
                <Image source={youmaylike1} style={{ width: 140, height: 100, borderRadius: 5 }} />
                <Image source={youmaylike2} style={{ width: 140, height: 100, marginLeft: 20, borderRadius: 5 }} />
            </Box>
            </Box>

            <Box style={{ display: 'flex', marginTop: 50, height: 50, paddingTop: 20, paddingLeft: 20 }}>

                <TouchableOpacity style={{ backgroundColor: '#A96224', color: 'white', width: 150, height: 40, borderRadius: 10, paddingLeft: 30, paddingTop: 10, }} onPress={() => navigation.navigate('Order')}>Add to Cart</TouchableOpacity>
            </Box>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0BB9D',
        alignItems: 'center'
    },
    image: {
        width: 333,
        height: 250
    },
    box2: {
        marginTop: 25,
    },
    box3: {
        display: 'flex',
        paddingLeft: 20,
        marginTop: 10,
    },
    box4: {
        marginTop: 50
    },
})