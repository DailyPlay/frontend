import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async (key: string) => {
  const value = await AsyncStorage.getItem(key);
  try {
    return JSON.parse(value!);
  } catch (e: any) {
    // error reading value
    return value;
  }
};

const setData = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    return true;
  } catch (e) {
    return false;
  }
};
const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (e) {
    return false;
  }
};

export default {getData, setData, removeData};
