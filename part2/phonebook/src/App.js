import React, { useState } from 'react'

const App = () => {
  
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  
  const Person=(props)=>{

    const personname = props.person.name;
    return(
      <div>
        {personname}
      </div>
    )
  }
  const handleNameChange = (event)=>{
    setNewName(event.target.value)
  }
  const createPerson=()=>{
    const person={
      name: newName,
    };
    return person;
  }
  
  const handleSubmit=(event)=>{
    event.preventDefault()
    const person = createPerson()
    setPersons(persons.concat(person))
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button onClick={handleSubmit}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(
          person => <div key={Math.random()*10}>{person.name}</div>)
          }
      </div>
    </div>
  )
}

export default App