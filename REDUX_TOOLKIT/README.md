# First Step

## The very first step to implement the redux-toolkit is to create an store which will basicly manage the access of the variable

```
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/Todo/todoSlice"

export const Store = configureStore({
    reducer: todoReducer
})

// here the configureStore in a function which is used to manage the access means it contain takes an object which contain all the reducers which is used to change the values in the main variable or global variable the reducers which are defined in store can access the or manipulate the global variable 
```

# Second Step

## The second step is to create a file which contain a all the valiable and the function or the reducers 

```
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;


// Here the createSlice is the function which accepts an object and that object contain three parameters first is name which is basicly used to identify, second parameter is the initialState or the global valiable which will store all the values and the third parameter is the reducers which will manipulate the values and everything is exported
```

```
reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
  },

//  Now every function which is declared in the reducres has the acces of the two parameter first one in state parameter. this parameter give the access to manipulate or to access the existing data in the global variable.
the second parameter is the action paramenter which is used as a carrier to carry data from where it is called 
```

# Third Step

## Now in the previous two step all the setup work has been done now to use this we have two function which comes from react-redux 
## first one is [useDispatch] --> this function is mainly use to carry data and give to the action 

```
const addTodoHandler = (e) => {
        dispatch(addTodo(input))
    }

// syntax to use dispatch method the input which is passed is the action and it carries a payload which is given to function which was written the the reducers    
```

## second on is [useSelector] --> this function is used to get all the data from the global valiable by using the store which was previously made all the data are accesed the by the store only 

```
 const todos = useSelector(state => state.todos)

 // it has the access of the store file and this function gets all the data from there only
```

# Fourth Step

## Now once all the components are made its time to use it 

```
<Provider store={Store}>
      <AddTodo/>
      <Todos/>
</Provider>

// Provider which comes from the react-redux it accepts a variable store here the store needs to be passed and all the components which are inside this provider will have access to the store if the component is outside the store it will not be able to access the store or any property
```