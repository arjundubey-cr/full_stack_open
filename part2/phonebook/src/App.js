import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
  
  const handleNameChange = (event)=>{
    setNewName(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit" onClick={()=>setPersons(persons.push(newName))}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(
          person=>console.log(person)
        )}
      </div>
    </div>
  )
}

export default App