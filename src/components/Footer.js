import React, { memo, useContext, useMemo } from 'react'
import { TodosContext } from 'store/todosContext'

function Footer() {
  const { todos } = useContext(TodosContext)
  const remaining = useMemo(() => todos.filter(t => !t.completed).length, [
    todos,
  ])

  return (
    <div>
      {remaining} / {todos.length} remaining
    </div>
  )
}

export default memo(Footer)
