import {createSlice} from "@reduxjs/toolkit"

const initialState = {
isLogged: false,
username: ""
};

const navigationSlice = createSlice({
name: "Category",
reduces: {
setLogin(state,action){
state.isLogged = action.payload
}
},
initialState,
});

export const {setLogin} = navigationSlice.actions;
export default navigationSlice.reducer;

