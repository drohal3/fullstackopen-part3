const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
}

const personSchema = new mongoose.Schema({
    name: String, number: String
})

const password = process.argv[2]
const url = `mongodb+srv://user:${password}@cluster0.rprom3q.mongodb.net/?retryWrites=true&w=majority`

const Person = mongoose.model('Person', personSchema)

const name = process.argv.length < 4 ? false : process.argv[3]
const number = process.argv.length < 5 ? false : process.argv[4]

mongoose
    .connect(url)
    .then((result) => {
        console.log('connected')

        if (name === false) {
            console.log("Phonebook:")
            Person.find({}).then(result => {
                result.forEach(person => {
                    console.log(`${person.name} ${person.number}`)
                })
                mongoose.connection.close()
                process.exit(0)
            })
        }
        const person = new Person({
            name, number
        })

        return person.save()
    })
    .then(() => {
        console.log(`added ${name} number ${number} to phonebook`)
        return mongoose.connection.close()
    })
    .catch((err) => console.log(err))

