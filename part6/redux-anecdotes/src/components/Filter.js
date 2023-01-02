import { useSelector } from "react-redux"
import { manageFilter } from "../reducers/filterReducer"
import { connect } from "react-redux"


const Filter = (props) => {
    const filtered = useSelector(state => state.filter)
    const anecdotes = useSelector(state => state.anecdotes)
    const anecdotesFiltered = anecdotes.filter(x => x.content.includes(filtered))

    const handleChange = (event) => {
        event.preventDefault()
      // input-field value is in variable event.target.value
        props.manageFilter(event.target.value)
    }
    const style = {
      marginBottom: 10
    }
  
    return (
      <div style={style}>
        filter <input onChange={handleChange} />
        <section>
            filtered list:
            {anecdotesFiltered.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
            </div>
          </div>
        )}
            

        </section>
      </div>
    )
  }
  
  export default connect(null, { manageFilter })(Filter)