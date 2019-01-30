import React, { memo, useContext, useCallback } from 'react'
import { TodosContext } from 'store/todosContext'

function TodoList() {
  const { todos, dispatch } = useContext(TodosContext)

  return (
    <ul css="list-style: none">
      {todos.map((t, i) => (
        <li
          css={`
            margin: 10px;
            text-decoration: ${t.completed ? 'line-through' : 'none'};
            opacity: ${t.completed ? 0.5 : 1};
            cursor: pointer;
            width: 50%;
          `}
          onClick={useCallback(
            () => dispatch({ type: 'TOGGLE_TODO', index: i }),
            [todos],
          )}
          key={t.id}
        >
          {t.text}
        </li>
      ))}
    </ul>
  )
}

export default memo(TodoList)
