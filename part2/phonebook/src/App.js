import { useEffect, useState } from 'react'
import initialData from './components/initialData.js'
import addButton from './components/addButton'
import personService from './services/persons'


const App = (props) => {
  const [persons, setPersons] = useState([
    { name: initialData}
  ])
  const [newName, setNewName] = useState('a new name')
  const [showAll, setShowAll] = useState(true)
  const [newNumber, setNewNumber] = useState('a new number')
  const [searchName, setSearchName] = useState('a search term')
  const [errorMessage, setErrorMessage] = useState(null)
  const [errorMessageRed, setErrorMessageRed] = useState(null)

useEffect(() => {
  personService
    .getAll()
    .then(response => {
    setPersons(response)
  })
  .catch(error => {
    setErrorMessageRed('failed to fullfillpromise')
  })
}, [])

const addNumber = (event) => {
  event.preventDefault()
  const noteObject = {
    name: newName,
    number: newNumber,
    date: new Date().toISOString(),
    important: Math.random() < 0.5,
  }
  for(let i =0;i<persons.length; i++){
    if (noteObject.name === persons[i].name){
       personService
        .update(persons[i].id, noteObject)
        .then(response => {
          personService
          .getAll()
          .then(response => {
          setPersons(response)
          .catch(error => {
            setErrorMessageRed(`${persons[i].name} has been eliminated`)
          })
        })
        })
        .catch(error => {
          setErrorMessageRed(`${persons[i].name} has been eliminated`)
        })
      setNewName('')
      setErrorMessage(`${persons[i].name}'s number has been replaced!!`)
      return
    }
  }
 personService
   .create(noteObject)
   .then(response => {
     setPersons(persons.concat(response))
     setErrorMessage(`${noteObject.name} has been added to the database baby!`)
   })
   .catch(error => {
  })
 setNewName('')
}
const handleNewName = (event) => {
  setNewName(event.target.value)
}
const handleNewNumber = (event) =>{
  setNewNumber(event.target.value)
}
const handleSearch = (event) =>{
  setSearchName(event.target.value)
}
const filterByName = (event) => {
  event.preventDefault()
  setSearchName('')
}
const buttonClick = (props) => {
  setErrorMessageRed(`${props} has been deleted!!`)
  personService
    .userDelete(props)
    .then(response => {
        personService
      .getAll()
      .then(response => {
      setPersons(response)
      })
    })
    .catch(error => {
      setErrorMessageRed(`User ${props} has been eliminated already!!`)
    })
  setNewName('')
}
const Person = ({ person }) => {
  return (
    <li className='person' key={Math.random()}>{person.name} {person.number} 
    <button onClick={()=> buttonClick(person.id)}>Delete</button></li>
  )
}
const ErrorMsg = ({ message}) => {
  if(message === null){
      return null
  }else{
  setErrorMessage(message)
  setTimeout(() => {
      setErrorMessage(null)
  }, 5000)

  return (
      <div className='error'>
          {errorMessage}
      </div>
  )}
}
const ErrorMsgRed = ({ message}) => {
  if(message === null){
      return null
  }else{
  setErrorMessageRed(message)
  setTimeout(() => {
      setErrorMessageRed(null)
  }, 5000)
  return (
      <div className='errorRed'>
          {errorMessageRed}
      </div>
  )}
}
 const namesToShow = showAll
   ? persons
   : persons.filter(person => person.name.toLocaleLowerCase() === searchName.toLocaleLowerCase())
 
return (
  <div>
    <h2>Phonebook</h2>
    <ErrorMsg message={errorMessage} />
    <ErrorMsgRed message={errorMessageRed} />
    <form onSubmit={filterByName}>
      <div>
        filter by name:
        <input value={searchName} onChange={handleSearch}></input>
        <button onClick={() => setShowAll(!showAll)}>toggle filter</button>
      </div>
    </form>
    <h2>add a new</h2>
    <form onSubmit={addNumber}>
      <div>
        name: 
        <input 
        value={newName}
        onChange={handleNewName}
        />
      </div>
      <div>
        number:
        <input value={newNumber}
        onChange={handleNewNumber}
        />
      </div>
      {addButton}
    </form>
    <h2>Numbers</h2>
    <ul>
      {namesToShow.map(person =>
        <Person key={Math.random()} person={person} />)}
    </ul>
  </div>
)

}
export default App