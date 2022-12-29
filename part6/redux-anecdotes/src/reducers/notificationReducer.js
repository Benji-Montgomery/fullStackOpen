import { createSlice } from "@reduxjs/toolkit"

const initialState = 'some notification'

const notificationSlice = createSlice({
name: 'notifications',
initialState,
reducers:{
  setNotification(state, action) {
    const anecdote = action.payload;
    return `You voted for: '${anecdote.slice(0, 30)}...'`
  },
  removeNotification(){
    return null
  },
}
})

let timeoutID
export const manageNotification = (content, timeout) => {
  return (dispatch) => {
    const timeoutSeconds = timeout * 1000
    dispatch(setNotification(content))
    if (timeoutID) clearTimeout(timeoutID)
    timeoutID = setTimeout(() => {
      dispatch(removeNotification())
    }, timeoutSeconds)
  }
}

export const {setNotification, removeNotification } = notificationSlice.actions
export default notificationSlice.reducer