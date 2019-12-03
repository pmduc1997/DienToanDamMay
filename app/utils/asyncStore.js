import { AsyncStorage } from "react-native";

export function _setUserStore(user) {
    return AsyncStorage.setItem('user', JSON.stringify(user))
}

export function _getUserStore() {
    return AsyncStorage.getItem('user')
}