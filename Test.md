## Setup for Client Testing

### Testing Framework Used

For our project, we discussed in some depth the best framework with which to achieve cohesion in code, style, and testing. After some debate, we settled on Angular, partly due to its strict rules and regulations and partly due to its focus on testing. Specifically we will be using Karma to run our tests as it was developed as a test runner for JavaScript and Angular that allows for Continuous Integration and easy-to-use debugging tools. In general, tests are created using the "describe() -> it()" model, with except() functions as assets using Promises. 

### Service Functions Tests

Functions created in order to communicate with the back-end are service files, and these are fairly straightforward to test as they involve creating a basic TestBed and checking to determine whether the functions that we expect to exist do in fact, exist. Mostly, this calls for a focus in function-based structure of our service code, as functions are encouraged by the way that they are tested.

### Component Tests

Component Testing is a fair bit more involved as it involves testing the validity of the front-end itself. Mostly this involves checking HTML tags and accessing for specific tags as we expect them to arrive. An example of this is during the creation of a form, the delete button should only appear when the project is an existing one. Thus, we would attempt to access the HTML tag for the delete button, expecting it to only exist when a project exists. Furthermore, component class variables can be used to determine the current stage of the component function that is being tested. For example, if a function is expecting a response from the database, that response can be stored within a variable in the component function and the value of that variable can be tested.

Form fields in components are also tested based on the input that they hold. For example, if an input field only expect numbers, then string inputs would be invalid and thus rejects. We will test for this functionally by adding input into these form fields and expect error to appear when invalid input is given.

## Setup for API Testing

### Testing Framework Used
We are using Mocha and chai to be testing framework we use. In addition, the Faker library is used to help us create fake data to be inserted into our database. We choose Mocha and Chai due to a very comprehensive tutorial we found that uses them with node, express and sequelize library.

### How APIs are tested
The procedure for API tests are as follows:
1. We setup environment variables such that the server will connected to a test database during testing.
2. We connect out testing framework to the test database.
3. Before each test is ran, we empty our test database.
4. Each test will generate and insert a fixed amount data in the database for the particular test.
5. Each test will then make API requests to the server and match results between data generated in step 4 and the data we receive from the API tests.