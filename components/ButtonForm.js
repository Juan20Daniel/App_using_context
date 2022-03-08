import { Pressable, Text, StyleSheet } from 'react-native';

const ButtonForm = ({ action }) => {
    return (
        <Pressable style={styles.container} onPress={() => action()}>
            <Text style={styles.value}>Agregar</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#19A8CB',
        marginHorizontal: 10,
        justifyContent: 'center',
    },
    value: {
        color: '#fff',
        fontSize: 18
    }
});

export default ButtonForm;