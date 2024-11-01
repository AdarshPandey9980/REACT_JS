import './App.css'
import AddTodo from './component/AddTodo'
import Todos from './component/Todos'
import { Provider } from 'react-redux'
import { Store } from './app/Store'


function App() {

  return (
    <Provider store={Store}>
      <AddTodo/>
      <Todos/>
    </Provider>
  )
}

export default App
