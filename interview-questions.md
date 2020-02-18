# ASSESSMENT 2: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. What does CRUD stand for?

  Your answer:
  An application should have the minimum functionalities of CRUD to be considered a good working application.

  CREATE - Users can add and edit new entries.
  READ   - Users can view their entries and the application's content.
  UPDATE - Users can edit and update their entries.
  DELETE - Users can delete/deactivate/remove their entries.

  Researched answer:
  The CRUD paradigm is common when constructing web applications with a database. It provides a memorable framework to remind developers how to construct basic yet full and usable functionalities for the users. Web applications aren't considered complete until it includes all of CRUD's functionalities.

  CREATE - The functionaliy for Create will add entry/entries to the database. Each entry will be assigned a unique id, which can be used to access it later.

  READ   - The functionality for Read is simply to retrieve and display a single entry by including its unique id in the request or request to view all entries. This functionaliy should not alter any entry.

  UPDATE - The functionality for Update is to retrieve an entry by including its unique id and then edit/update it.

  DELETE - The functionality for Delete is to retrieve the entry by its unique id and then remove/delete/deactivate the entry.


2. What are the 5 HTTP verbs?

  Your answer:
    GET    - read
    PUT    - read
    POST   - create
    PATCH  - update/edit
    DELETE - delete/deactivate/remove

  Researched answer:
    GET    - read
    PUT    - update
    POST   - create
    PATCH  - update
    DELETE - delete

    1) GET: Requests a representation of the specified resource. Requests using GET should only retrieve data.

    2) POST: Used to submit an entity to the specified resource, often causing a change in state or side effects on the server.

    3) PATCH: Used to apply partial modifications to a resource.

    4) PUT: Replaces all current representations of the target resource with the request payload.

    5) DELETE: Deletes the specified resource.

3. When creating a basic (stateless) class component in React, what are the necessary elements needed to render "Hello World" on the page?

  Your answer:

  A function with a capitalized name to store the methods and JSX.

    function Component() {
      render() {
        return (
          <h1>Hello World</h1>
        )
      }
    }

  Researched answer:

    const Component = () => {
      return (
        <h1>Hello World</h1>
      )
    }

    ReactDOM.render(Component, whereItShouldBeRenderedTo)

4. What is JSX?

  Your answer: JSX looks like HTML, but it's almost like an alias for JavaScript. Instead of using React.createElement(), we can use JSX instead.
  Babel then changes JSX into something readable for React.

  Researched answer: You can use XML/HMTL-like syntax in the same file you would use to write JavaScript. Babel will transform these expressions into actual JavaScript code. Instead of putting JS within HTML, JSX allows us to put HTML within JS.



5. What is the difference between React state and props?

  Your answer:
  State is where the data can change/update.
  State should not be mutated directly; use setState().
  Props are the data passed from the parent component that stores the state to the child component. Props within the child component should not change or be passed back up to the parent component.

  Researched answer:
  State is data maintained inside a component. It's local/owned by that component.
  The component itself will update the state using setState().

  Props is data passed from the parent component. Props are read-only in the child component that receives them. Callback functions can also be passed, which can be executed inside the child to initiate an update.


6. STRETCH: What is hoisting in JavaScript?

  Your answer:
  Hoisting is when a variable or function is 'hoisted' to the top of the file. That could lead to the value being undefined, if not used carefully. When used correctly, functions can be invoked at the top of the file even if the function was declared at the bottom of the file.

  Researched answer:
  All variable declarations using 'var' are hoisted/lifted to the top of their functional/local scope (declared inside a function) or the top of their global scope (declared outside a function) regardless of where the actual declaration has been made.

  Function declarations are hoisted at the very top, before variable declarations.

  Only variable declarations are hoisted (i.e., num = 8). Variable declarations must be written out before it's called, but must be initialized somewhere within the file.


## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- React lifecycle methods
Each component has a lifecyle that you can monitor and maniplulate during its three main phases. They are in order from start to finish.
  1) Mounting - this is the phase where the component is created (your code and React internal's) and inserted into the DOM.
  2) Updating - this is the phase where data is updated, whether it's state or props.
  3) Unmounting - this is the final phase where the component is removed from the DOM.


- API
It stands for Application Programming Interface. It's a set of function that allows applications to access data and interact with software components, operating systems or microservices. It basically delivers a user's response to a system and sends the system's response back to the user.

- event.preventDefault()
This method tells the user agent not to use its default action if the event was not explicitly handled.

- DOM events
JS code can be exectued when an event occurs. You can add it in the HTML as an onclick or in React's render method.

Events:

When a user clicks the mouse
When a web page has loaded
When an image has been loaded
When the mouse moves over an element
When an input field is changed
When an HTML form is submitted
When a user strokes a key
