import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';

import PageA from './modules/PageA';
import PageB from './modules/PageB';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="PageA"
          screenOptions={{
            cardStyle: {
              // view的高度层级 一般必须设置 否则可能出现bug
              elevation: 1,
            },
          }}>
          <Stack.Screen
            name="PageA"
            component={PageA}
            options={{
              // TODO
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="PageB"
            component={PageB}
            options={{
              // TODO
              headerShown: false,
              ...TransitionPresets.SlideFromRightIOS,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
