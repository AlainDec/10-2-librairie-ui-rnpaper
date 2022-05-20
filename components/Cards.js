import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Card, Title, Paragraph, Text } from 'react-native-paper';

const data = [
    {
        date: '26 mai 2021',
        title: 'Marche à pied',
        distance: 6,
        duree: '0h59mn',
        urlImg: 'https://picsum.photos/700',
    },
    {
        date: '23 mai 2021',
        title: 'Vélo',
        distance: 10,
        duree: '1h38mn',
        urlImg: 'https://picsum.photos/700',
    },
    {
        date: '20 mai 2021',
        title: 'Marche à pied',
        distance: 2,
        duree: '0h26mn',
        urlImg: 'https://picsum.photos/700',
    }
];

const Cards = () => {
    return (
        <ScrollView style={styles.scrollview}>
            <Text style={styles.titleH1}>Home</Text>
            {
                data.map( (value, index) => (
                    <Card key={index} style={styles.card}>
                        <Card.Content style={styles.blockHead}>
                            <View style={styles.sport}>
                                <Title style={styles.textDate}>{value.date}</Title>
                                <Paragraph style={styles.textBlockTitle}>{value.title}</Paragraph>
                            </View>
                            <View style={styles.img}>
                                <Card.Cover source={{ uri: value.urlImg }} style={styles.image} />
                            </View>
                        </Card.Content>
                        <Card.Content style={styles.blockFoot}>
                            <View>
                                <Text style={styles.textInfo}>Distance</Text>
                                <Text style={styles.textValue}>{value.distance}</Text>
                            </View>
                            <View>
                                <Text style={styles.textInfo}>Durée</Text>
                                <Text style={styles.textValue}>{value.duree}</Text>
                            </View>
                        </Card.Content>
                    </Card>
                ))
            }
        </ScrollView>
    );
};
        
export default Cards;

const styles = StyleSheet.create({
    scrollview: {
      padding: 10,
    },
    card: {
        elevation: 4,
        marginBottom: 20,
    },
    blockHead: {
        flexDirection: 'row',
    },
    sport: {
        flex: 1,
    },
    textDate: {
      color: '#999',
      fontSize: 16,
    },
    textBlockTitle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    img: {
        flex: 1,
    },
    image: {
        borderWidth: 1,
        borderColor: '#ccc',
    },
    blockFoot: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titleH1: {
      fontSize: 28,
      fontWeight: 'bold',
    },
    textInfo: {
      fontSize: 13,
      fontWeight: 'bold'
    },
    textValue: {
      fontSize: 15,
      color: '#999',
    },
  });
  