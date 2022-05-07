import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}> {props.text} </button>
  )
}

const StatisticsLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {

  let total = good + neutral + bad

  if (total === 0) {
    return (
      <div>
        <h1>Statistics</h1> 
        <p>No Feedback given</p>
      </div>
    )
  } else {}
    return (
      <div>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <StatisticsLine text="good" value={good} />
            <StatisticsLine text="neutral" value={neutral} />
            <StatisticsLine text="bad" value={bad} />
            <StatisticsLine text="all" value={total} />
            <StatisticsLine text="average" value={((good - bad)/total).toFixed(2)} />
            <StatisticsLine text="positive" value={((good)/total).toFixed(2) + " %"} />
        </tbody>
        </table>
      </div>
    )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setGood(good+1)} text="Good" />  
      <Button handleClick={() => setNeutral(neutral+1)} text="Neutral" />  
      <Button handleClick={() => setBad(bad+1)} text="Bad" />  
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div> 
  )
}

// <Button handleClick={() => setGood(1)} text="Good" />

export default App
