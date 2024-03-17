import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: {
        username: "",
        id: "",
    },
    isAuthenticated: false,
    token: null,
    loading: false,
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        setCurreuntUser: (state, action) => {
            state.currentUser = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setAuth: (state, action) => {
            state.isAuthenticated = true;
            state.token = action.payload;
        },
        clearAuth: (state) => {
            state.isAuthenticated = false;
            state.token = null;
        }
    }
})

export const {setAuth, setCurreuntUser, setLoading, clearAuth} = authSlice.actions;

export default authSlice.reducer;