import { View, TextInput, StyleSheet, Text } from "react-native";

const InputGroup = ({ label, state, setState, type }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} onChangeText={setState} value={state} keyboardType={type} />
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        height: 80,
        backgroundColor: '#DEDEDE',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        marginHorizontal: 10
    },
    label: {
        marginBottom: 10
    },
    input: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingHorizontal: 10
    }

});

export default InputGroup;