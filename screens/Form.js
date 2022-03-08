import react, { useState, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputGroup from '../components/InputGroup';
import ButtonForm from '../components/ButtonForm';
import PlatillosContext from '../context/platillosContext';

const Form = ({ navigation }) => {
    const [ category, setCategory ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ price, setPrice ] = useState(0);

    const { addPlatillo } = useContext(PlatillosContext);

    const add = () => {
        const plaillos = { 
          id: new Date(),
          category,
          description,
          price
        }
        addPlatillo(plaillos);
        setCategory('');
        setDescription('');
        setPrice(0);
        navigation.navigate('Inicio');
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Formulario</Text>
        <InputGroup label="Categoria" state={category} setState={setCategory} type="default" />
        <InputGroup label="Descripción" state={description} setState={setDescription} type="default" />
        <InputGroup label="Precio" state={price} setState={setPrice} type="numeric" />
        <ButtonForm action={add} />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    title: {
        marginHorizontal: 10,
        marginTop: 40,
        marginBottom: 20,
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default Form;