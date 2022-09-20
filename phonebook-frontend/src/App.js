import {useState, useEffect} from 'react'
import personsService from './sevices/persons'

const Notification = ({message, type}) => {
    let notificationClass = `notification ${type}`

    return message !== 'none' ? (<div className={notificationClass}>
            <p>{message}</p>
        </div>) : null
}

const Filter = ({filter, changeHandler}) => {
    return (<form>
        <div>
            filter shown with: <input value={filter} onChange={changeHandler}/>
        </div>
    </form>)
}

const PersonForm = ({name, nameChangeHandler, number, numberChangeHandler, addPersonClickHandler}) => {
    return (<form>
        <div>
            name: <input value={name} onChange={nameChangeHandler}/>
        </div>
        <div>
            number: <input value={number} onChange={numberChangeHandler}/>
        </div>
        <div>
            <button type="submit" onClick={addPersonClickHandler}>add</button>
        </div>
    </form>)
}

const Persons = ({persons, deletePerson}) => {
    return (persons.map(person => <p key={person.name}>{person.name} {person.number}
        <button onClick={() => deletePerson(person.id)}>delete</button>
    </p>))
}

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')
    const MessageTypes = {
        Success: "success", Error: "error", None: "none"
    }
    const [message, setMessage] = useState(MessageTypes.None)

    const [messageType, setMessageType] = useState(MessageTypes.None)

    useEffect(() => {
        console.log('effect')
        personsService
            .getAll()
            .then(data => {
                console.log('promise fulfilled')
                setPersons(data)
                console.log("persons", persons)
            })
    }, [])

    console.log('render', persons.length, 'persons')

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    const handleFilterChange = (event) => {
        console.log(event.target.value)
        setFilter(event.target.value)
    }

    const addPerson = (event) => {
        event.preventDefault()

        const notePerson = {
            name: newName, number: newNumber
        }

        // START unique name
        // Uncomment the section below to allow only one entry per specific name and update existing contact otherwise with confirmation pop up
        let personsCopy = [...persons]  // Question: is this really needed? Is nopt enough to replace object in this array?
                                        // Answer: No, this is obsolete. Map function below will create a new array

        let existingPerson = personsCopy.find(person => person.name === newName)

        if (existingPerson) {
            if (window.confirm("Do you want to update existing contact?")) {
                personsService.update(existingPerson.id, notePerson).then(returnedPerson => {
                    setPersons(personsCopy.map(person => person.id === returnedPerson.id ? returnedPerson : person))
                    setNewName('')
                    setNewNumber('')
                    setMessage(`${returnedPerson.name} updated`)

                    setMessageType(MessageTypes.Success)
                    setTimeout(() => {
                        setMessage(MessageTypes.None)
                    }, 5000)
                }).catch(error => {
                    console.log(error.response.data.error)
                    setMessage(error.response.data.error)
                    setMessageType(MessageTypes.Error)
                    setTimeout(() => {
                        setMessage(MessageTypes.None)
                    }, 5000)
                })
            }

            return
        }

        // END unique name

        personsService.create(notePerson)
            .then(returnedPerson => {
                setNewName('')
                setNewNumber('')
                console.log("returned person", returnedPerson)
                setPersons(persons.concat(returnedPerson))

                setMessage(`${returnedPerson.name} added`)

                setMessageType(MessageTypes.Success)
                setTimeout(() => {
                    setMessage(MessageTypes.None)
                }, 5000)
            }).catch(error => {
                console.log(error.response.data.error)
                setMessage(error.response.data.error)
                setMessageType(MessageTypes.Error)
                setTimeout(() => {
                    setMessage(MessageTypes.None)
                }, 5000)
        })

        // setPersons(persons.concat(notePerson))
        setNewName('')
        setNewNumber('')
    }

    const deletePerson = (id) => {
        let personToRemove = persons.find(person => person.id === id)
        if (window.confirm("Do you really want to delete contact?")) {
            console.log("delete", id)
            personsService.remove(id).then(response => {
                setPersons(persons.filter(person => person.id !== id))
                setMessage(`${personToRemove.name}  removed`)

                setMessageType(MessageTypes.Success)
                setTimeout(() => {
                    setMessage(MessageTypes.None)
                }, 5000)
            }).catch(response => {
                setPersons(persons.filter(person => person.id !== id))
                console.log(response)
                if (response.response.status === 404) {
                    setMessage(`${personToRemove.name} has already been removed`)

                    setMessageType(MessageTypes.Error)
                    setTimeout(() => {
                        setMessage(MessageTypes.None)
                    }, 5000)
                }

            })
        }
    }

    let personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

    return (<div>
        <h2>Phonebook</h2>
        <Filter filter={filter} changeHandler={handleFilterChange}/>
        <h2>Add new</h2>
        <Notification message={message} type={messageType}/>
        <PersonForm name={newName} nameChangeHandler={handleNameChange} number={newNumber}
                    numberChangeHandler={handleNumberChange} addPersonClickHandler={addPerson}/>
        <h2>Numbers</h2>
        <Persons persons={personsToShow} deletePerson={deletePerson}/>
    </div>)
}

export default App