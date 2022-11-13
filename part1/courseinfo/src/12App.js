// const App =() => {
//   



//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>
//         {part1} {exercises1}
//       </p>
//       <p>
//         {part2} {exercises2}
//       </p>
//       <p>
//         {part3} {exercises3}
//       </p>
//       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//     </div>
//   )
// }
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

 const Content = (props) =>{
   return (
     <div>
       <p>{props.parts} </p>
     </div>
   )
 }

 const Total = (props) =>{
   return (
     <div>
       <p> Number of exercisess {props.grand}</p>
     </div>
   )
 }

const App = () => {

  const course = 'Half Stack application development'
   const part1 = 'Fundamentals of React'
   const exercises1 = 10
   const part2 = 'Using props to pass data'
   const exercises2 = 7
   const part3 = 'State of a component'
   const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content parts={part1 + ' ' + exercises1}  />
      <Content parts={part2 + ' ' + exercises2}  />
      <Content parts={part3 + ' ' + exercises3}  />
      <Total grand={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App;
