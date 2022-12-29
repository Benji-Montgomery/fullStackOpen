import NewAnecdote from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { useDispatch } from 'react-redux'
import anecdoteService from './services/anecdotes'
import { useEffect } from 'react'
import { setAnecdotes } from './reducers/anecdoteReducer'
import { initializeAnecdotes } from './reducers/anecdoteReducer'

const App = () => {
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   anecdoteService
  //     .getAll().then(anecdotes => dispatch(setAnecdotes(anecdotes)))
  // }, [dispatch])

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])


  return (
    <div>
      <h2>create new</h2>
      <Notification />
      <NewAnecdote />
      <Filter />
      <AnecdoteList />
    </div>
  )
}

export default App