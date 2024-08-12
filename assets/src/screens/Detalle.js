import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Detalle = ({ route }) => {
    const { evento } = route.params;
  
    return (
      <View style={styles.container}>
        <Text style={styles.name}>{evento.name}</Text>
        <Text style={styles.description}>{evento.description}</Text>
        <Text style={styles.start_date}>{evento.start_date}</Text>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 10,
    },
    start_date: {
        fontSize: 14,
        color: '#666',
    },
});

export default Detalle;
