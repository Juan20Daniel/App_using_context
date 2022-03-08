import { View, Text, StyleSheet } from 'react-native';

const NotData = () => {
    return (
        <View style={styles.container}>
            <Text>Not data</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        borderWidth: 1,
        borderColor: "#acacac",
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        borderRadius: 5,
        marginTop: '50%'
    }
});

export default NotData;