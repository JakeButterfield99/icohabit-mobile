import AsyncStorage from '@react-native-async-storage/async-storage';

const StoreData = async (key: string, val: string) => {
    try {
        await AsyncStorage.setItem(key, val);
        return true;
    } catch (e) {
        console.log('storage set error', key, e);
        return false;
    }
}

const GetData = async (key: string) => {
    try {
        const val = await AsyncStorage.getItem(key);
        return val;
    } catch (e) {
        console.log('storage get error', key, e);
        return false;
    }
}

const RemoveData = async (key: string) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (e) {
        console.log('storage remove error', key);
        return false;
    }
}

const WipeData = async () => {
    try {
        await AsyncStorage.clear();
    } catch (e) {
        console.log('storage wipe error');
        return false;
    }
}

export default {
    StoreData,
    GetData,
    RemoveData,
    WipeData,
}