import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "currentUser",
    initialState: { country_id: 0 },

    reducers: {
        setUser: (user, { payload }) => {
            Object.assign(user, payload);
        },
    },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
