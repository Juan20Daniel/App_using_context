import { View, Text, StyleSheet } from 'react-native';

const Item = ({ item }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{item.category}</Text>
            <Text style={styles.description}>Descripción: {item.description}</Text>
            <Text style={styles.price}>Precio: ${item.price}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        height: 120,
        borderRadius: 5,
        backgroundColor: '#DEDEDE',
        justifyContent: 'space-around',
        padding: 10,
        marginVertical: 5
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
    },
    description: {
        fontSize: 20,
        color: '#acacac',
    },
    price: {
        fontSize: 20,
    }
});

export default Item;