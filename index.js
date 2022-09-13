const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(express.json())
app.use(morgan('tiny'))

let persons = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

app.get('/info', (request, response) => {
    console.log("/info received")
    // I guess the time could be red from the params, going with the current solution to quickly move on
    response.send(
        `<p>Phonebook has info for ${persons.length} people</p><p>${new Date().toLocaleString()} (${Intl.DateTimeFormat().resolvedOptions().timeZone})</p>`
    )
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    console.log(id)
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    console.log("delete", id)
    persons = persons.filter(note => note.id !== id)

    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
    const person = request.body
    console.log(person)
    let id = Math.floor(Math.random() * 9007199254740991);
    let name = ("name" in person) ? person.name : false
    let number = ("number" in person) ? person.number : false

    if (name === false) {
        response.status(400).json({error: "name is required"})
        return
    }

    if (number === false) {
        response.status(400).json({error: "number is required"})
        return
    }

    if (name !== false && persons.find(person => person.name === name)) {
        response.status(400).json({error: "name must be unique"})
        return
    }
    let personToAdd = {id,name,number}
    persons = persons.concat(personToAdd)
    console.log(personToAdd)
    response.json(person)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})