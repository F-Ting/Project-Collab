## Setup for Client Testing (Anisha)

### Testing Framework Used

For our project, we discussed in some depth the best framework with which to achieve cohesion in code, style, and testing. After some debate, we settled on Angular, partly due to its strict rules and regulations and partly due to its focus on testing. Specifically we will be using Karma to run our tests as it was developed as a test runner for JavaScript and Angular that allows for Continuous Integration and easy-to-use debugging tools. In general, tests are created using the "describe() -> it()" model, with except() functions as asserts using Promises.  

### Service Functions Tests

Functions created in order to communicate with the back-end are service files, and these are fairly straightforward to test as they involve creating a basic TestBed and checking to determine whether the functions that we expect to exist do in fact, exist. Mostly, this calls for a focus in function-based structure of our service code, as functions are encouraged by the way that they are tested. 

### Component Tests

Component Testing is a fair bit more involved as it involves testing the validity of the front-end itself. Mostly this involves checking HTML tags and accessing for specific tags as we expect them to arrive. An example of this is during the creation of a form, the delete button should only appear when the project is an existing one. Thus, we would attempt to access the HTML tag for the delete button, expecting it to only exist when a project exists. Furthermore, component class variables can be used to determine the current stage of the component function that is being tested. For example, if a function is expecting a response from the database, that response can be stored within a variable in the component function and the value of that variable can be tested.

## Setup for API Testing (Daniel) 
- Testing Framework Used
- How are functions tested
- How are APIs tested

## Setup for Travis CI ()
- What does the yaml script do?
- How does CI ensure existing codebase isn't broken by new/incoming features?
