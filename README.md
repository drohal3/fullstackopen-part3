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

## Exercise 3.3: Phonebook backend step3
**Task:**
Implement the functionality for displaying the information for a single phonebook entry. The url for getting the data for a person with the id 5 should be http://localhost:3001/api/persons/5

If an entry for the given id is not found, the server has to respond with the appropriate status code.

**Solution:**
The solution is demonstrated in the application located in the root directory.

## Exercise 3.4: Phonebook backend step4
**Task:**
Implement functionality that makes it possible to delete a single phonebook entry by making an HTTP DELETE request to the unique URL of that phonebook entry.

Test that your functionality works with either Postman or the Visual Studio Code REST client.

**Solution:**
The solution is demonstrated in the application located in the root directory.

## 3.5: Phonebook backend step5
**Task:**
Expand the backend so that new phonebook entries can be added by making HTTP POST requests to the address http://localhost:3001/api/persons.

Generate a new id for the phonebook entry with the Math.random function. Use a big enough range for your random values so that the likelihood of creating duplicate ids is small.

**Solution:**
The solution is demonstrated in the application located in the root directory.

## Exercise 3.6: Phonebook backend step6
**Task:**
Implement error handling for creating new entries. The request is not allowed to succeed, if:

- The name or number is missing
- The name already exists in the phonebook

Respond to requests like these with the appropriate status code, and also send back information that explains the reason for the error, e.g.:
```
{ error: 'name must be unique' }
```

**Solution:**
The solution is demonstrated in the application located in the root directory.

## Exercise 3.7: Phonebook backend step7
**Task:**
Add the [morgan](https://github.com/expressjs/morgan) middleware to your application for logging. Configure it to log messages to your console based on the tiny configuration.

The documentation for Morgan is not the best, and you may have to spend some time figuring out how to configure it correctly. However, most documentation in the world falls under the same category, so it's good to learn to decipher and interpret cryptic documentation in any case.

Morgan is installed just like all other libraries with the npm install command. Taking morgan into use happens the same way as configuring any other middleware by using the app.use command.