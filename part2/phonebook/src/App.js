import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('');
  const [newPhoneNum, setPhoneNum] = useState('');
  const [filterName, setFilter] = useState('')
  // const Person = (props) => {
  //   const personname = props.person.name;
  //   return (
  //     <div>
  //       {personname}
  //     </div>
  //   )
  // }
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhoneNum(event.target.value);
  };
  const createPerson = () => {
    const person = {
      name: newName,
      number: newPhoneNum,
    };
    return person;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const checkDuplicate = persons.find((p) => p.name === newName);
    if (typeof checkDuplicate != 'undefined') {
      window.alert(`${checkDuplicate.name} is already in the list`);
    } else {
      const person = createPerson();
      setPersons(persons.concat(person));
      // window.alert(`${person.name} has been added to the list`)
    }
  };
  // const filteredPersons = persons.filter((person) => {
  //   return person.name.toLowerCase().includes(nameFilter.toLowerCase());
  // });
  // const handleFilter=(event)=>{
  //   const word=event.target.value 
  //   const result=persons.filter();
  // }
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter Shown with
        <input value={filterName} onChange={handleSubmit} />
      </div>
      <h2>add a new</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          phonenumber:{' '}
          <input value={newPhoneNum} onChange={handlePhoneChange} />
        </div>
        <div>
          <button type='submit' onClick={handleSubmit}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => (
          <div key={Math.random() * 10}>
            {person.name} {person.number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
