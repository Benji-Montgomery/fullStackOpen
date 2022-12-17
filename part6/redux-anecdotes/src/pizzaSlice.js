import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
name: 'woopooo',
initialState:{
    value:5
},
notification: 'hello girl',
reducers: {
    increment: (state) => {
        state.value +=1
    }
}
})

export const { increment } = counterSlice.actions

export default counterSlice.reducer