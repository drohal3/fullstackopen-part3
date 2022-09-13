# Fullstack Open - Part3: Programming a server with NodeJS and Express
Part 3 of the Full Stack online course https://fullstackopen.com/en/part3

## Exercise 3.1: Phonebook backend step1
**Task:**
Implement a Node application that returns a hardcoded list of phonebook entries from the address http://localhost:3001/api/persons.

Data:
```
[
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
```
Notice that the forward slash in the route api/persons is not a special character, and is just like any other character in the string.

The application must be started with the command npm start.

The application must also offer an npm run dev command that will run the application and restart the server whenever changes are made and saved to a file in the source code.

**Solution:**
The solution is demonstrated in the application located in the root directory.

## Exercise 3.2: Phonebook backend step2
**Task:**
Implement a page at the address http://localhost:3001/info that looks roughly like this:

The page has to show the time that the request was received and how many entries are in the phonebook at the time of processing the request.

**Solution:**
The solution is demonstrated in the application located in the root directory.
