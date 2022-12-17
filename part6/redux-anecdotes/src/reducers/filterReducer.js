import { createSlice } from "@reduxjs/toolkit";

const initialState = null

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers:{
        setFilter(state, action){
            const filter = action.payload
            return filter
        }
    }
})

export const manageFilter = (content) => {
    return (dispatch) => {
        dispatch(setFilter(content))
    }
}

export const { setFilter } = filterSlice.actions
export default filterSlice.reducer