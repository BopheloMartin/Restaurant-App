import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

import { Box } from '@shopify/react-native-skia';
import { Card, Title, Paragraph } from 'react-native-paper';

import promopromo from './images/promopromo.png'
import BaconCheese from './images/BaconCheese.png'
import filledstar from './images/filledstar.png'
import halfempty from './images/halfempty.png'
import Doublecheese from './images/Doublecheese.png'

import OreoMilkshake from './images/OreoMilkshake.png'
import CokeDrink from './images/CokeDrink.png'

export default function Home({navigation}) {
    return (
        <View style={[styles.container, { flexDirection: 'column' }]}>

            <View style={styles.image}>
                <Image
                    source={promopromo}
                    style={{ borderRadius: 20, width: 300, height: 190 }}
                />
            </View>

            <Text style={{ color: 'white' }}>
                Most Popular
            </Text>

            <Box style={{ display: 'flex', marginTop: 220 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Burgerpage')}>
                    <Card style={styles.card1}>
                        <Image source={BaconCheese} style={{ borderRadius: 20, width: 120, height: 120 }} />
                        <Card.Content>
                            <Title style={{ color: 'white', fontSize: 12 }}>Double Bacon Burger</Title>
                            <Text></Text>

                            <View style={styles.stars}>
                                <Image source={filledstar} style={{ borderRadius: 20, width: 15, height: 15 }} />
                                <Image source={filledstar} style={{ borderRadius: 20, width: 15, height: 15 }} />
                                <Image source={filledstar} style={{ borderRadius: 20, width: 15, height: 15 }} />
                                <Image source={filledstar} style={{ borderRadius: 20, width: 15, height: 15 }} />
                                <Image source={halfempty} style={{ borderRadius: 20, width: 15, height: 15 }} />
                            </View>

                            <Text style={{ color: 'white' }}>R100</Text>
                        </Card.Content>
                    </Card>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Burgerpage2')}>
                    <Card style={styles.card1}>
                        <Image source={Doublecheese} style={{ borderRadius: 20, width: 120, height: 120 }} />
                        <Card.Content>
                            <Title style={{ color: 'white', fontSize: 12 }}>Double Cheese Burger</Title>
                            <Text></Text>

                            <View style={styles.stars}>
                                <Image source={filledstar} style={{ borderRadius: 20, width: 15, height: 15 }} />
                                <Image source={filledstar} style={{ borderRadius: 20, width: 15, height: 15 }} />
                                <Image source={filledstar} style={{ borderRadius: 20, width: 15, height: 15 }} />
                                <Image source={filledstar} style={{ borderRadius: 20, width: 15, height: 15 }} />
                                <Image source={halfempty} style={{ borderRadius: 20, width: 15, height: 15 }} />
                            </View>

                            <Text style={{ color: 'white' }}>R100</Text>
                        </Card.Content>
                    </Card>
                </TouchableOpacity>

            </Box>

            <Box style={{ display: 'flex', marginTop: 50 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Milkshake')}>
                    <Card style={styles.card1}>
                        <Image source={OreoMilkshake} style={{ borderRadius: 20, width: 120, height: 120 }} />
                        <Card.Content>
                            <Title style={{ color: 'white', fontSize: 12 }}>Oreo Nutella Milkshake</Title>
                            <Text></Text>

                            <View style={styles.stars}>
                                <Image source={filledstar} style={{ borderRadius: 20, width: 15, height: 15 }} />
                                <Image source={filledstar} style={{ borderRadius: 20, width: 15, height: 15 }} />
                                <Image source={filledstar} style={{ borderRadius: 20, width: 15, height: 15 }} />
                                <Image source={filledstar} style={{ borderRadius: 20, width: 15, height: 15 }} />
                                <Image source={halfempty} style={{ borderRadius: 20, width: 15, height: 15 }} />
                            </View>

                            <Text style={{ color: 'white' }}>R85</Text>
                        </Card.Content>
                    </Card>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Coke')}>
                    <Card style={styles.card1}>
                        <Image source={CokeDrink} style={{ borderRadius: 20, width: 120, height: 120 }} />
                        <Card.Content>
                            <Title style={{ color: 'white', fontSize: 12 }}> Coca-Cola Soft Drink </Title>
                            <Text></Text>

                            <View style={styles.stars}>
                                <Image source={filledstar} style={{ borderRadius: 20, width: 15, height: 15 }} />
                                <Image source={filledstar} style={{ borderRadius: 20, width: 15, height: 15 }} />
                                <Image source={filledstar} style={{ borderRadius: 20, width: 15, height: 15 }} />
                                <Image source={filledstar} style={{ borderRadius: 20, width: 15, height: 15 }} />
                                <Image source={halfempty} style={{ borderRadius: 20, width: 15, height: 15 }} />
                            </View>

                            <Text style={{ color: 'white' }}>R18</Text>
                        </Card.Content>
                    </Card>
                </TouchableOpacity>

            </Box>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0BB9D',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 2,
        marginTop: 25,
    },
    stars: {
        flexDirection: 'row',
    },
    card1: {
        width: 120,
        borderRadius: 20,
        marginLeft: 20,
        backgroundColor: '#E0BB9D',
    },
    card2: {
        width: 120,
        borderRadius: 20,
        marginLeft: 40,
        backgroundColor: '#E0BB9D',
    },
    align: {
        display: 'flex',
    },
})