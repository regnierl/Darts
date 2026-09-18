import { configureStore } from "@reduxjs/toolkit";
import playersSlice from "./players";
import modalsSlice from "./Modals";

const store = configureStore({
    reducer: {
        players: playersSlice.reducer,
        modals: modalsSlice.reducer
    }
})

export default store;