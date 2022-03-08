import { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import platillosContext from '../context/platillosContext';
import NotData from '../components/NotData';
import Item from '../components/Item';

const Home = () => {
  const [ paintPlatillos, setPaintPlatillos ] = useState([])
  const { platillos } = useContext(platillosContext);
  
  useEffect(() => {
    setPaintPlatillos(platillos)
  }, [platillos]);
  
  return (
    <View style={styles.container}>
      {paintPlatillos.length !== 0 ? 
        <>
          <Text style={styles.title}>Platillos</Text>
          <FlatList 
            data={paintPlatillos}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <Item item={item} />
              )
            }}
          />
        </>
        :
        <NotData />
      }
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    title: {
      marginHorizontal: 10,
      fontSize: 25,
      fontWeight: 'bold'
    }
});

export default Home;