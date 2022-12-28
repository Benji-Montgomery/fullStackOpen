// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { createSlice } from '@reduxjs/toolkit'

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
    createAnecdote(state, action) {
      const content = action.payload
      console.log('createAnecdote is running')

      state.push({
        content,
        id: generateId()
      })
    },
    setAnecdotes(state, action) {
      return action.payload
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

// export const createAnecdote = (content) => {
//   console.log(content)
//   return {
//     type: 'NEW_ANECDOTE',
//     data: {
//       content,
//       votes: 0,
//       id: getId()
//     }
//   }
// }

export const setALL = (content) => {
  console.log('fucksetit')
  return {
    type: 'SET_ALL',
    data: content
  }
}
// getAll().then(anecdotes => {
//     reducer(() => {
//       return{
        
//       }
//     })
// })

export const VoteAnecdote = (id) => {
  console.log('initial reducer', id)
  return {
    type: 'VOTE',
    data: { id }
  }
}

export const { createAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer