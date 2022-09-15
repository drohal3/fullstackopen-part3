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

**Solution:**
The solution is demonstrated in the application located in the root directory.

## Exercise 3.8*: Phonebook backend step8
**Task:**
Configure morgan so that it also shows the data sent in HTTP POST requests:

fullstack content
Note that logging data even in the console can be dangerous since it can contain sensitive data and may violate local privacy law (e.g. GDPR in EU) or business-standard. In this exercise, you don't have to worry about privacy issues, but in practice, try not to log any sensitive data.

This exercise can be quite challenging, even though the solution does not require a lot of code.

This exercise can be completed in a few different ways. One of the possible solutions utilizes these two techniques:

- [creating new tokens](https://github.com/expressjs/morgan#creating-new-tokens)
- [JSON.stringify](JSON.stringify)

**Solution:**
The solution is demonstrated in the application located in the root directory.

## Exercise 3.9 phonebook backend step9
**Task:**
Make the backend work with the phonebook frontend from the exercises of the previous part. Do not implement the functionality for making changes to the phone numbers yet, that will be implemented in exercise 3.17.

You will probably have to do some small changes to the frontend, at least to the URLs for the backend. Remember to keep the developer console open in your browser. If some HTTP requests fail, you should check from the Network-tab what is going on. Keep an eye on the backend's console as well. If you did not do the previous exercise, it is worth it to print the request data or request.body to the console in the event handler responsible for POST requests.

**Solution:**
The only change needed in frontend (taken from [part2 phonebook](https://github.com/drohal3/fullstackopen-part2/tree/main/phonebook)) was changing the base url. In backend, there was the need for taking cors middleware into use.

## 3.10 phonebook backend step10
**Task:**
Deploy the backend to the internet, for example to Heroku.

NB the command heroku works on the department's computers and the freshman laptops. If for some reason you cannot install Heroku to your computer, you can use the command npx heroku.

Test the deployed backend with a browser and Postman or VS Code REST client to ensure it works.

PRO TIP: When you deploy your application to Heroku, it is worth it to at least in the beginning keep an eye on the logs of the heroku application AT ALL TIMES with the command heroku logs -t.

Create a README.md at the root of your repository, and add a link to your online application to it.

**Solution:**
Backend was deployed to https://fly.io/ following https://fly.io/docs/hands-on/install-flyctl/ instructions.
URL with persons data: https://phonebook-bcknd3.fly.dev/api/persons 

## Exercise 3.11 phonebook full stack
**Task:**
Generate a production build of your frontend, and add it to the internet application using the method introduced in this part.

NB Make sure the directory build is not gitignored

Also make sure that the frontend still works locally (in development mode when started with command npm start).

**Solution:**
Frontend used from [part2 phonebook](https://github.com/drohal3/fullstackopen-part2/tree/main/phonebook).
Changed base urld in persons.js service file:
```
const baseUrl = '/api/persons'
```
and added proxy to package.json
```
"proxy": "http://localhost:3001"
```
Updating existing persons not yet implemented.
App URL: https://phonebook-bcknd3.fly.dev/ 


