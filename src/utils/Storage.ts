import AsyncStorage from '@react-native-async-storage/async-storage';

export const save = async (key: string, value: string) => {
  try {
    return await AsyncStorage.setItem(key, value);
  } catch (err) {
    console.error(err);
  }
};

export const load = async (key: string) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (err) {
    console.error(err);
  }
};

export const remove = async (key: string) => {
  try {
    return await AsyncStorage.removeItem(key);
  } catch (err) {
    console.error(err);
  }
};

export const clear = async () => {
  try {
    return await AsyncStorage.clear();
  } catch (err) {
    console.error(err);
  }
};
