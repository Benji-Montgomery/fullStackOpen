import { useState } from 'react'

const Header = (props) => {
  return (
    <div>
      <h2>{props.content}</h2>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const Stats =(props) => {
  return (
      <table>
        <tbody>
        <tr><td>good</td><td>{props.good}</td></tr>
        <tr><td>neutral</td><td>{props.neutral}</td></tr>
        <tr><td>bad</td><td>{props.bad}</td></tr>
        <tr><td>all</td><td>{props.total}</td></tr>
        <tr><td>average</td><td>{props.average}</td></tr>
        <tr><td>percentage</td><td>{props.percentage}</td></tr>
        </tbody>
      </table>
    
  )
}


const App = () => {
  const title = {
  feedback: 'give feedback',
  statistics: 'statistics'
  }
  const titles = ['good','neutral','bad','all', 'average', 'positive', 'No feedback given']
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total =(bad+good+neutral)
  const average = ((good-bad)/total)
  const positive = ((good/total)+ ' %')

  if(total > 0){
    return (
      <div>
        <Header content={title.feedback} />
        <Button
          onClick={() => setGood(good + 1)}
          text= 'good'
        />
        <Button
          onClick={() => setNeutral(neutral + 1)}
          text= 'neutral'
        />
        <Button
          onClick={() => setBad(bad + 1)}
          text= 'bad'
        />
        <Header content={title.statistics} />
        <Stats good={good} neutral={neutral} bad={bad} total={total} average={average} percentage={positive} />
      </div>
    )}else {
      return (
        <div>
        <Header content={title.feedback} />
        <Button
          onClick={() => setGood(good + 1)}
          text= 'good'
        />
        <Button
          onClick={() => setNeutral(neutral + 1)}
          text= 'neutral'
        />
        <Button
          onClick={() => setBad(bad + 1)}
          text= 'bad'
        />
        <Header content={title.statistics} />
        <p>{titles[6]}</p>
        </div>
      )

  }
}

export default App;
