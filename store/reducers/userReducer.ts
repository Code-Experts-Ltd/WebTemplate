import { createSlice } from '@reduxjs/toolkit'
let user: any = {}
const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        user: {},
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
    },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
