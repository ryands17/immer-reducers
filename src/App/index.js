import React, { memo } from 'react'
import TodoList from 'components/TodoList'
import { TodosContext } from 'store/todosContext'
import { useImmerReducer } from 'hooks/useImmerReducer'
import { todoReducer } from 'store/reducers/todos'
import Footer from 'components/Footer'

function App() {
  const [todos, dispatch] = useImmerReducer(todoReducer, [
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Learn Immer', completed: false },
  ])

  return (
    <>
      <TodosContext.Provider value={{ todos, dispatch }}>
        <h2>Todo App</h2>
        <TodoList />
        <Footer />
      </TodosContext.Provider>
    </>
  )
}

export default memo(App)
