import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isLogged: false,
    userLogin: "cos",
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
        }
    },
});

export const {setLoginIn, setUsername} = navigationSlice.actions;
export default navigationSlice.reducer;

