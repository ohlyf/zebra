import React from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';

export default () => {
  return (
    <View style={styles.root}>
      <Text
        style={styles.txt}
        numberOfLines={1}
        ellipsizeMode="clip"
        selectable={true}
        selectionColor={'#ff0000'}
        onPress={() => {
          console.log('onPress');
        }}
        onLongPress={() => {
          console.log('onLongPress');
        }}
        allowFontScaling={true}>
        写文字写文字写文字写文字
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f0f0f0',
  },
  txt: {
    height: 300,
    backgroundColor: 'rgba(0,0,0,0.1)',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    textDecorationStyle: 'dashed',
    textDecorationLine: 'underline',
    ...Platform.select({
      ios: {
        // ios居中
        lineHeight: 300,
      },
    }),
    textShadowColor: '#808080',
    textShadowOffset: { width: 2, height: 4 },
    textShadowRadius: 8,
  },
});
