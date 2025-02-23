import { configureStore } from "@reduxjs/toolkit";
import userRducer from "./userSlice";

const appStore = configureStore({
    reducer: {
        user: userRducer,
    },
});

export default appStore;