

// import React from 'react'
import React, { useState } from "react";
import ReactDOM from "react-dom";

// const Statistics = (props) => {
// 	return (
// 		<div>
// 			<h3>Good: {props.good}</h3>
// 			<h3>Neutral: {props.neutral}</h3>
// 			<h3>Bad: {props.bad}</h3>
// 			<h3>All: {props.All}</h3>
// 			<h3>Average: {props.average}</h3>
// 			<h3>Positive: {props.positive}</h3>
// 		</div>
// 	)
// }
// const Statistics = (props) => {
// 	if (props.All === 0) {
// 		return (
// 			<div>
// 				<h1>No Feedback Given Now</h1>
// 			</div>
// 		)
// 	} 

// 	return (
// 		<div>
// 			<h3>Good: {props.good}</h3>
// 			<h3>Neutral: {props.neutral}</h3>
// 			<h3>Bad: {props.bad}</h3>
// 			<h3>All: {props.All}</h3>
// 			<h3>Average: {props.average}</h3>
// 			<h3>Positive: {props.positive}</h3>
// 		</div>
// 	)
// }

const App = () => {

  const [index, setIndex] = useState(0)
  const [vote, setVote] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 5,
    4: 0,
    5: 0
  })

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const handle = () => {
    setIndex(Math.floor(Math.random() * anecdotes.length))
  }

  const voteChange = () => {
    setVote({
      ...vote,
      [index]: vote[index] + 1
    })
  }

  const max = () => {
    let max = -1, maxKey = -1

    for (let key in vote) {
      if (vote[key] > max) {
        maxKey = key
        max = vote[key]
      }
    }
    return maxKey
  }

  return (
    <div>
      <h1>Anecdote of the Day</h1> 
      <button onClick={voteChange}>Vote</button>
      <button onClick={handle}>Next Anecdotes</button>
      <p>{anecdotes[index]}</p>
      <h4>Has {vote[index]} Votes</h4>
      <h1>Anecdote with most Votes</h1>
      <p>{anecdotes[max()]}</p>
    </div>
  )
}

//   const [index, setIndex] = useState(0)
// 	const [vote, setVote] = useState([0,0,0,0,0,0])

// 	const anecdotes = [
// 		'If it hurts, do it more often',
// 		'Adding manpower to a late software project makes it later!',
// 		'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
// 		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
// 		'Premature optimization is the root of all evil.',
// 		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// 	]

// 	const handleChange = () => {
// 		setIndex(Math.floor(Math.random()*anecdotes.length))
// 	}

// 	const voteChange = () => {
// 		let copy = [...vote]

// 		copy[index]++

// 		setVote(copy)
// 	}

// 	return (
// 		<div>
// 			<button onClick = {handleChange}>Next Anecdotes!!!</button>
// 			<br />
// 			<br />
// 			<br />
// 			<button onClick = {voteChange}>Vote</button>

// 			<h1>{anecdotes[index]}</h1>
// 			<h1>Has {vote[index]} Votes</h1>
// 		</div>
// 	)
// }


//   const [index, setIndex] = useState(0)

// 	const anecdotes = [
// 		'If it hurts, do it more often',
// 		'Adding manpower to a late software project makes it later!',
// 		'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
// 		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
// 		'Premature optimization is the root of all evil.',
// 		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// 	]

// 	const handleChange = () => {
// 		setIndex(Math.floor(Math.random()*anecdotes.length))
// 	}

// 	return (
// 		<div>
// 			<button onClick = {handleChange}>Click Me!!!</button>
// 			<h1>{anecdotes[index]}</h1>
// 		</div>
// 	)
// }

//   const [good, setGood] = useState(0)
// 	const [neutral, setNeutral] = useState(0)
// 	const [bad, setBad] = useState(0)

// 	return (
// 		<div>
// 			<h1>Please Give Feedback, Thank you!</h1>

// 			<br />

// 			<button onClick = {() => setGood(good + 1)}>Good</button>

// 			<button onClick = {() => setNeutral(neutral + 1)}>Neutral</button>

// 			<button onClick = {() => setBad(bad + 1)}>Bad</button>

// 			<br />

// 			<h1>Statistics</h1>

// 			<br />

// 			<Statistics 
// 				good={good} 
// 				neutral= {neutral} 
// 				bad= {bad} 
// 				All= {good + neutral + bad} 
// 				average= {(good - bad)/(good + neutral + bad)} 
// 				positive= {(good + neutral)/(good + neutral + bad)}
// 			/>
// 		</div>
// 	)
// }

//   const [good, setGood] = useState(0)
// 	const [neutral, setNeutral] = useState(0)
// 	const [bad, setBad] = useState(0)

// 	return (
// 		<div>
// 			<h1>Please Give Feedback, Thank you!</h1>

// 			<br />

// 			<button onClick = {() => setGood(good + 1)}>Good</button>

// 			<button onClick = {() => setNeutral(neutral + 1)}>Neutral</button>

// 			<button onClick = {() => setBad(bad + 1)}>Bad</button>

// 			<br />

// 			<h1>Statistics</h1>

// 			<br />

// 			<Statistics 
// 				good={good} 
// 				neutral= {neutral} 
// 				bad= {bad} 
// 				All= {good + neutral + bad} 
// 				average= {(good - bad)/(good + neutral + bad)} 
// 				positive= {(good + neutral)/(good + neutral + bad)}
// 			/>
// 		</div>
// 	)
// }


//   const [good, setGood] = useState(0)
// 	const [neutral, setNeutral] = useState(0)
// 	const [bad, setBad] = useState(0)

// 	return (
// 		<div>
// 			<h1>Please Give Feedback, Thank you!</h1>

// 			<br />

// 			<button onClick = {() => setGood(good + 1)}>Good</button>

// 			<button onClick = {() => setNeutral(neutral + 1)}>Neutral</button>

// 			<button onClick = {() => setBad(bad + 1)}>Bad</button>

// 			<br />

// 			<h1>Statistics</h1>

// 			<br />

// 			<h3>Good: {good}</h3>
// 			<h3>Neutral: {neutral}</h3>
// 			<h3>Bad: {bad}</h3>
// 			<h3>All: {good + neutral + bad}</h3>
// 			<h3>Average: {(good - bad)/(good + neutral + bad)}</h3>
// 			<h3>Positive: {(good + neutral)/(good + neutral + bad)}</h3>
// 		</div>
// 	)
// }


// const course = 'Half Stack application development'
// const part1 = 'Fundamentals of React'
// const exercises1 = 10
// const part2 = 'Using props to pass data'
// const exercises2 = 7
// const part3 = 'State of a component'
// const exercises3 = 14

// return (
//   <div>
//     <Header course = {course}/>
// 	  <Content part1 = {part1} part2 = {part2} part3 = {part3} exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3} />
// 	  <Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3}/>
//   </div>
// )}

// const Header = (props) => {
//   return (
//     <div>
//       <h1>{props.course}</h1>
//     </div>
//   )};

// const Content = (props) => {
//   return (
//     <div>
//       <p>{props.part1} = {props.exercises1}</p>
//       <p>{props.part2} = {props.exercises2}</p>
//       <p>{props.part3} = {props.exercises3}</p>
//     </div>
//   )}

//   const Total = (props) => {
//     return (
//       <div>
//         <p>Number of exercises: {props.exercises1 + props.exercises2 + props.exercises3}</p>
//       </div>
//     )};

export default App;
