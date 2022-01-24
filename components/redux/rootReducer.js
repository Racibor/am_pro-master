import {combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = combineReducers({
navigation: navigationSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;