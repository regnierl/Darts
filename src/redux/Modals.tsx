import { createSlice } from "@reduxjs/toolkit";

const initialState: {
    showNewPlayer: boolean,
    showAbout: boolean
} = {
    showNewPlayer: false,
    showAbout: false
}
const modalsSlice = createSlice({
    name: "modals",
    initialState: initialState,
    reducers: {
        showNewPlayer: (state, action) => {
            state.showNewPlayer = action.payload
        },
        showAbout: (state, action) => {
            state.showAbout = action.payload
        }
    }
}) 

export default modalsSlice

export const { showNewPlayer, showAbout } = modalsSlice.actions;