import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isLogged: false,
    userLogin: "cos",
    imageUri: "empty",
    lastScreen: "",
};

const navigationSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {
        setLoginIn(state,action){
            state.isLogged = action.payload
        },
        setUsername(state,action){
            state.userLogin = action.payload
        },
        setLastScreen(state, action){
            state.lastScreen = action.payload
        },
        setImageUri(state, action){
            state.imageUri = action.payload
        },
    },
});

export const {setLoginIn, setUsername, setLastScreen, setImageUri} = navigationSlice.actions;
export default navigationSlice.reducer;

