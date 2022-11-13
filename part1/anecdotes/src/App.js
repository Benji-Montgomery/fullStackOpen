import { useState } from 'react'

function indexOfMax(arr) {
  if (arr.length === 0){
    return -1
  }
  let max = arr[0]
  let maxIndex = 0

  for(let i =1; i < arr.length; i++){
    if(arr[i] > max){
      maxIndex= i
      max = arr[i]
    }
  }
  return maxIndex
}
const App = () => {
  const Random = () => {
    let z = Math.round(Math.random()*6)
    return z
  }
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [allVotes, setVote] = useState([])
  const winner = () =>{
    let z = [0,0,0,0,0,0,0]
    for (let i = 0; i < allVotes.length; i++){
      z[allVotes[i]] = z[allVotes[i]] + 1
    }
    return indexOfMax(z)
  }

  const VoteFunc = () => {
    setVote(allVotes.concat(selected))
  }

  return (
    <div>
      <h2>
        Anecdote of the day
      </h2>
      <h4>
        {anecdotes[selected]}
      </h4>
      <button onClick={VoteFunc}>
        vote for this quote
      </button>
      <button onClick={() => setSelected(Random())}>
        Random Quote
      </button>
      <h2>
        Anecdote with most votes
      </h2>
      <h4>
        {anecdotes[winner()]}
      </h4>
    </div>
  )
}

export default App