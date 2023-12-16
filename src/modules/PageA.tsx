import React from 'react';

import {View, Text, Button} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
export default () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const handlePress = () => {
    navigation.push('PageB');
  };
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        页面A
      </Text>
      <Button title="点击跳转" onPress={handlePress} />
    </View>
  );
};
