const Header = ({ name }) =>{
    return(<h1>{name}</h1>)
  }
  const Part = ({ name, exercises}) => {
    return (
      <p>
        {name} {exercises}
      </p>
    )
  }
  
  const Content = ({parts}) =>{
    return(
      parts.map(part => <Part name={part.name}exercises={part.exercises} key={part.id} />)
    )
    
  
  }
  
  const Totals = ({total}) => {
    let sum = 0 
    for (let i= 0; i<total.length; i++){
      sum = sum + total[i].exercises
    }
    return (
      <div>
        Total of {sum} exercises
      </div>
    )
  }

const Course = ({ course}) => {
    return course.map((course) => {
      return (
      <div key={Math.random()}>
        <Header name = {course.name} key={course.id}/>
        <Content parts = {course.parts} key={course.parts.id}/>
        <Totals total = {course.parts} key={Math.random()}/>
      </div>
      )
    }
    )
  }
export default Course