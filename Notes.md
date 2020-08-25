
Start with context.js.  It's here that we bring in creatContext from
React and assign it to MyContext. Then we create a functional component
called MyProvider.  MyProvider will be imported to App.js and wrapped around
the entire component.  This makes the props available to all the components
within its tags.      

Then we set up the useState and useEffect to receive and store the content fetched from the API.

Then we return MyContext.Provider with the value of the useState.  Within those tages we need the props.children so the components within the provider have access to the state.     

-----

In the UsersList, we import MyContext from context.js and import useContext from React.  Within the functional component useContext passes in MyContext and gets the data from the "users" part of useState located in context.js.
We then pass all of the contents of the user to the User Component.