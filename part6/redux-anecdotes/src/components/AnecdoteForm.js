import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer"
import { manageNotification } from "../reducers/notificationReducer";
import anecdoteService from '../services/anecdotes'
import { connect } from "react-redux";


const NewAnecdote = (props) => {
    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        // const newAnecdote = await anecdoteService.createNew(content)
        // dispatch(createAnecdote(newAnecdote))
        //dispatch(createAnecdote(content))
        dispatch(manageNotification(content, 3000))
        props.createAnecdote(content)
    }

    return (
        <form onSubmit={addAnecdote}>
            <input name="anecdote" />
            <button type="submit">add</button>
        </form>
    )
}

export default connect(null, { createAnecdote })(NewAnecdote)
