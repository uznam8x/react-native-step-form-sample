import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RegisterForm from './src/views/RegisterForm';
import LoginScreen from './src/views/LoginScreen';
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Login'}}
        />
        <Stack.Screen
          name="Age verification"
          component={RegisterForm}
          options={{title: 'Age verification'}}
        />
        <Stack.Screen
          name="Service introduction and notices"
          component={RegisterForm}
          options={{title: 'Service introduction and notices'}}
        />
        <Stack.Screen
          name="Connecting a wallet"
          component={RegisterForm}
          options={{title: 'Connecting a wallet'}}
        />
        <Stack.Screen
          name="Completed registration"
          component={RegisterForm}
          options={{title: 'Completed registration'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
