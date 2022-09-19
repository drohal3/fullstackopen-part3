require('dotenv').config() // must be imported before Persons model to make the variables available globally
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Persons = require('./models/persons')
const app = express()

app.use(cors())
app.use(express.json())
morgan.token('data', function (req, res) { return JSON.stringify(req.body) })
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'))
app.use(express.static('build')) // middleware to check build directory first (for static content)

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

app.get('/info', (request, response) => {
    // TODO:
    console.log("/info received")
    // I guess the time could be red from the params, going with the current solution to quickly move on
    response.send(
        `<p>Phonebook has info for ${persons.length} people</p><p>${new Date().toLocaleString()} (${Intl.DateTimeFormat().resolvedOptions().timeZone})</p>`
    )
})

app.get('/api/persons', (request, response) => {
    Persons.find({}).then(persons => {
        response.json(persons)
    })
})

app.get('/api/persons/:id', (request, response) => {
    Persons.findById(request.params.id).then(person => {
        response.json(person)
    })
})

app.delete('/api/persons/:id', (request, response) => {
    Persons.findByIdAndDelete(request.params.id).then(() => {
        response.status(204).end()
    })
})

app.post('/api/persons', (request, response) => {
    const body = request.body

    let name = (body.name !== undefined) ? body.name : false
    let number = (body.number !== undefined) ? body.number : false

    if (name === false) {
        response.status(400).json({error: "name is required"})
        return
    }

    if (number === false) {
        response.status(400).json({error: "number is required"})
        return
    }

    // if (name !== false && persons.find(person => person.name === name)) {
    //     response.status(400).json({error: "name must be unique"})
    //     return
    // }

    const person = new Persons({
        name,number
    })

    person.save().then(savedPerson => {
        response.json(savedPerson)
    }).catch(error => {
        console.log("some error")
    })
})

app.put('/api/persons/:id', (request, response) => {
    const body = request.body

    const person = {
        name: body.name,
        number: body.number,
    }

    Persons.findByIdAndUpdate(request.params.id, person, { new: true })
        .then(updatedPerson => {
            response.json(updatedPerson.toJSON())
        })
        .catch(error => {

        })
})

const PORT = process.env.PORT || 3001 // fallbacks to 3001 if env variable not provided
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})