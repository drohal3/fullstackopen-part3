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

## Exercise 3.12: Command-line database
**Task:**
Create a cloud-based MongoDB database for the phonebook application with MongoDB Atlas.

Create a mongo.js file in the project directory, that can be used for adding entries to the phonebook, and for listing all of the existing entries in the phonebook.

NB: Do not include the password in the file that you commit and push to GitHub!

The application should work as follows. You use the program by passing three command-line arguments (the first is the password), e.g.:
```
node mongo.js yourpassword Anna 040-1234556
```
As a result, the application will print:
```
added Anna number 040-1234556 to phonebook
```
The new entry to the phonebook will be saved to the database. Notice that if the name contains whitespace characters, it must be enclosed in quotes:
```
node mongo.js yourpassword "Arto Vihavainen" 045-1232456
```
If the password is the only parameter given to the program, meaning that it is invoked like this:
```
node mongo.js yourpassword
```
Then the program should display all of the entries in the phonebook:
```
phonebook:
Anna 040-1234556
Arto Vihavainen 045-1232456
Ada Lovelace 040-1231236
```
You can get the command-line parameters from the process.argv variable.

NB: do not close the connection in the wrong place. E.g. the following code will not work:
```
Person
.find({})
.then(persons=> {
// ...
})
```
mongoose.connection.close()
In the code above the mongoose.connection.close() command will get executed immediately after the Person.find operation is started. This means that the database connection will be closed immediately, and the execution will never get to the point where Person.find operation finishes and the callback function gets called.

The correct place for closing the database connection is at the end of the callback function:
```
Person
.find({})
.then(persons=> {
// ...
mongoose.connection.close()
})
```
NB: If you define a model with the name Person, mongoose will automatically name the associated collection as people.

**Solution:**
The solution is implemented in mongo.js file located in the root directory.

Used service for the mongoDB: https://www.mongodb.com/atlas/database

## Exercise 3.13: Phonebook database, step1
**Task:**
Change the fetching of all phonebook entries so that the data is fetched from the database.

Verify that the frontend works after the changes have been made.

In the following exercises, write all Mongoose-specific code into its own module, just like we did in the chapter [Database configuration into its own module](https://fullstackopen.com/en/part3/saving_data_to_mongo_db#database-configuration-into-its-own-module).

**Solution:**
fly.io chosen as a service to run the app.

.env variables need to be configured as following:
```
 fly secrets set MONGODB_URI='<the_config_value>'
```

## Exercise 3.14: Phonebook database, step2
**Task:**
Change the backend so that new numbers are saved to the database. Verify that your frontend still works after the changes.

At this point, you can choose to simply allow users to create all phonebook entries. At this stage, the phonebook can have multiple entries for a person with the same name.

**Solution:**
Implemented together with the previous exercise, created new build for frontend and deployed to the server.

## Exercise 3.15: Phonebook database, step3
**Task:**
Change the backend so that deleting phonebook entries is reflected in the database.

Verify that the frontend still works after making the changes.

**Solution:**
Implemented together with the previous exercises

## Exercise 3.16: Phonebook database, step4
**Task:**
Move the error handling of the application to a new error handler middleware.

**Solution:**
Implemented according to the instructions.
 
## Exercise 3.17*: Phonebook database, step5
**Task:**
If the user tries to create a new phonebook entry for a person whose name is already in the phonebook, the frontend will try to update the phone number of the existing entry by making an HTTP PUT request to the entry's unique URL.

Modify the backend to support this request.

Verify that the frontend works after making your changes. 

**Solution:**
Implemented together with previous exercises.

## Exercise 3.18*: Phonebook database step6
**Task:**
Also update the handling of the api/persons/:id and info routes to use the database, and verify that they work directly with the browser, Postman, or VS Code REST client.

**Solution:**
Modified /info request.

## Exercise 3.19*: Phonebook database, step7
**Task:**
Expand the validation so that the name stored in the database has to be at least three characters long.

Expand the frontend so that it displays some form of error message when a validation error occurs. Error handling can be implemented by adding a catch block as shown below:
```
personService
.create({ ... })
.then(createdPerson => {
// ...
})
.catch(error => {
// this is the way to access the error message
console.log(error.response.data.error)
})
```
You can display the default error message returned by Mongoose, even though they are not as readable as they could be

**Solution:**
Added validation rules also for the number to test validation on update.

## Exercise 3.20*: Phonebook database, step8
***Task:***
Add validation to your phonebook application, that will make sure that phone numbers are of the correct form. A phone number must

has length of 8 or more
if formed of two parts that are separated by -, the first part has two or three numbers and the second part also consists of numbers

eg. 09-1234556 and 040-22334455 are valid phone numbers
eg. 1234556, 1-22334455 and 10-22-334455 are invalid
Use a [Custom validator](https://mongoosejs.com/docs/validation.html#custom-validators) to implement the second part of the validation.

If an HTTP POST request tries to add a name that is already in the phonebook, the server must respond with an appropriate status code and error message.

***Solution:***
Added validation in persons.js backend file.

## Exercise 3.21 Deploying the database backend to production
***Task:***
Generate a new "full stack" version of the application by creating a new production build of the frontend, and copy it to the backend repository. Verify that everything works locally by using the entire application from the address http://localhost:3001/.

Push the latest version to Heroku and verify that everything works there as well.

**Solution:**
Created a new build and deployed to fly.io. Tested if everything worked.

## Exercise 3.22: Lint configuration
**Task:**
Add ESlint to your application and fix all the warnings.

**Solution:**
Fixed code style