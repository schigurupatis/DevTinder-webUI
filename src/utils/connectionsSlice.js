import { createSlice } from "@reduxjs/toolkit";

const connectionsSlice = createSlice({
    name: 'connections',
    initialState: null,
    reducers: {
        addConnections: (state, action) => action.payload,
        removeConnections: () => null,
    }
});

export const { addConnections, removeCoonections } = connectionsSlice.actions;
export default connectionsSlice.reducer;