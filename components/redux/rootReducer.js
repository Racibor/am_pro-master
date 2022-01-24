import {combineReducers} from '@reduxjs/toolkit';
import navigationSlice from "../../navigation/navigationservice/navigationSlice";

const rootReducer = combineReducers({
    nav: navigationSlice,
});

export default rootReducer;