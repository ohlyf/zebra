import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import TextDemo from './demo/TextDemo';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <TextDemo />
    </SafeAreaView>
  );
};

export default App;
