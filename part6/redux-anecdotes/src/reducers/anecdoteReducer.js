import { useDispatch } from 'react-redux'
import axios from 'axios'
import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const baseurl = 'http://localhost:3001/anecdotes'

export const getAll = async () => {
  const response = await axios.get(baseurl)
  return response.data
}

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const generateId = () =>
  Number((Math.random() * 1000000).toFixed(0))

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    setAnecdotes(state, action) {
      return action.payload
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    voteAnecdote(state, action){
      const id = action.payload.id
      const anecdoteToChange = state.find(n => n.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes +1
      }
      
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : changedAnecdote)
    }
  }
})
  //console.log('state now: ', state)
  //console.log('action', action)
  // switch(action.type){
  //   case 'NEW_ANECDOTE':
  //     return [...state, action.data]
  //   case 'VOTE':
  //     const id = action.data.id
  //     const anecdoteToChange = state.find(n => n.id === id)
  //     console.log('current votes', anecdoteToChange)
  //     const changedAnecdote = {
  //       ...anecdoteToChange,
  //       votes: anecdoteToChange.votes + 1
  //     }
  //     return state.map(anecdote => 
  //       anecdote.id !== id ? anecdote : changedAnecdote)
  //   case 'SET_ALL':
  //     console.log('fuckit')
  //     return [action.payload]
  //   default:
  //     return state
  //   }

export const setALL = (content) => {
  console.log('fucksetit')
  return {
    type: 'SET_ALL',
    data: content
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const likeAnecdote = (anecdote) => {
  console.log('meow')
  return async dispatch => {
      const id = anecdote.id
      const content = {
        ...anecdote,
        votes: anecdote.votes +1
      }
      const changeAnecdote = await anecdoteService.update(id, content)
    //dispatch(anecdoteService.update(id, content))
    dispatch(voteAnecdote(anecdote))
  }
}
//export const VoteAnecdote = (id) => {
//   console.log('initial reducer', id)
//   return {
//     type: 'VOTE',
//     data: { id }
//   }
// }

export const { setAnecdotes, appendAnecdote, voteAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer