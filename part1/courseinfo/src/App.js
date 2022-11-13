// // const App =() => {
// //   



// //   return (
// //     <div>
// //       <h1>{course}</h1>
// //       <p>
// //         {part1} {exercises1}
// //       </p>
// //       <p>
// //         {part2} {exercises2}
// //       </p>
// //       <p>
// //         {part3} {exercises3}
// //       </p>
// //       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
// //     </div>
// //   )
// // }
// const Header = (props) => {
//   return (
//     <div>
//       <h1>{props.course}</h1>
//     </div>
//   )
// }

//  const Content = (props) =>{
//    return (
//      <div>
//        <p>{props.parts} </p>
//      </div>
//    )
//  }

//  const Total = (props) =>{
//    return (
//      <div>
//        <p> Number of exercisess {props.parts} </p>
//      </div>
//    )
//  }

// const App = () => {

// const course ={
//   name: 'Half sttack application development',
//      parts: [
//       {
//         name: 'Fundamentals of React ',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data ',
//         exercises: 7
//       },
//       {
//         name: 'State of a component ',
//         exercises: 14
//       }
//     ]
//   }
//   let brake=(
//     <br />
//   )
//   console.log('hiii')
//   return (
//     <div>
//       <Header course={course.name} />
//       {/* <Content parts={course.parts} /> */}
//       <Total parts={course.parts} />
//     </div>
//   )
// }

// export default App;

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  )
}

 const Part = (props) => {
   return (
     <p>
       {props.part} {props.exercises}
     </p>  
   )
 }

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises}</p>
    </div>
  )
}




const App = () => {
  const course = {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        }
    ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={course.parts} /> 
    </div>
  )
}

export default App