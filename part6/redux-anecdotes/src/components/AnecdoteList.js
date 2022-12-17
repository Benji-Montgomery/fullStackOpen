import { useDispatch, useSelector } from 'react-redux'
import { VoteAnecdote } from '../reducers/anecdoteReducer'
import { manageNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const dispatch = useDispatch()
    //console.log(anecdotes)
    anecdotes.sort((a, b) => b.votes - a.votes)
    const handleVote = (anecdote) => {
      dispatch(VoteAnecdote(anecdote.id))
      dispatch(manageNotification(anecdote.content, 3000))
    }

    return (
        <div>
        <h2>Anecdotes</h2>
        {anecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => handleVote(anecdote)}>vote</button>
            </div>
          </div>
        )}
        </div>
    )
}

export default AnecdoteList