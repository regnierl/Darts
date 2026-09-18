import { createSlice } from "@reduxjs/toolkit";

const initialState: {
    startNewGame: boolean,
    showAbout: boolean
} = {
    startNewGame: false,
    showAbout: false
}
const modalsSlice = createSlice({
    name: "modals",
    initialState: initialState,
    reducers: {
        showNewGamePopup: (state, action) => {
            state.startNewGame = action.payload
        },
        showAboutPopup: (state, action) => {
            state.showAbout = action.payload
        }
    }
}) 

export default modalsSlice

export const { showNewGamePopup: showNewGamePopup, showAboutPopup: showAboutPopup } = modalsSlice.actions;