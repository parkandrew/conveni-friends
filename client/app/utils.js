import { AsyncStorage } from 'react-native';

export async function getUser() {
    return await AsyncStorage.getItem('user');
};
