import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FirstScreen from "./src/screens/NotAuthorized/FirstScreen";
import Login from "./src/screens/NotAuthorized/Login";
import Registration from "./src/screens/NotAuthorized/Registration";

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="FirstScreen" component={FirstScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Registration" component={Registration} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
