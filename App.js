import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Form from './screens/Form';
import PlatillosState from './context/platillosState';

const Tap = createBottomTabNavigator();

export default function App() {
  return (
    <PlatillosState>
      <NavigationContainer>
        <Tap.Navigator initialRouteName="Inicio">
          <Tap.Screen name="Inicio" component={Home} />
          <Tap.Screen name="Añadir" component={Form} />
        </Tap.Navigator>
      </NavigationContainer>
    </PlatillosState>
  );
}