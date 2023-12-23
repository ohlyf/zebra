import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import icon_main_logo from '../../assets/icon_main_logo.png';
import {StackNavigationProp} from '@react-navigation/stack';

export default () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const startLogin = () => {
    navigation.replace('Login');
  };

  useEffect(() => {
    setTimeout(() => {
      startLogin();
    }, 3000);
  }, []);

  return (
    <View style={styles.root}>
      <Image style={styles.logo_main} source={icon_main_logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo_main: {
    width: 200,
    height: 105,
    marginTop: 200,
    resizeMode: 'contain',
  },
});
