import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer"
import { manageNotification } from "../reducers/notificationReducer";

const NewAnecdote = (props) => {
    const dispatch = useDispatch()

    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnecdote(content))
        dispatch(manageNotification(content, 3000))
    }

    return (
        <form onSubmit={addAnecdote}>
            <input name="anecdote" />
            <button type="submit">add</button>
        </form>
    )
}

export default NewAnecdote
