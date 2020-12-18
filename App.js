// import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react'
import {
  StyleSheet,
} from 'react-native'
import { View, Text, Button } from "react-native";

import CameraScreen from './src/CameraScreen.js';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ListData from './src/ListData';
import NavBar from './src/NavBar';
import AddPatient from './src/AddPatient'

import { Provider } from 'react-redux'
import store from './src/state/store'

import * as firebase from 'firebase';

import Fire from './src/Fire';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <Provider store={store}>
          <Stack.Navigator>
          
            
          <Stack.Screen
              name="Camera"
              component={CameraScreen}
              
              options={{ 
                headerTitle: props => null,
                headerShown: false
               }}
            />
            
          <Stack.Screen
              name="Add"
              component={AddPatient}
              // options={{ headerStyleInterpolator: forFade }}
            />
            

          <Stack.Screen
              name="Home"
              component={ListData}
              options={{
                title:"Home",
                headerTitle: props => <NavBar {...props} />
                // headerTintColor: 'white',
                // headerStyle: { backgroundColor: 'tomato' },
              }}
            />

          </Stack.Navigator>
        </Provider>
      </PaperProvider>
    </NavigationContainer>
  );
}

{/* <NavigationContainer>
  <MyStack />
</NavigationContainer> */}

{/* <Provider store={store}>
          <BaseApp />
        </Provider> */}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    alignItems: 'center'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.white,
  },
  btnCapture: {
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    borderRadius: 25
  }
});


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
