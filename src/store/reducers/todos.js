export const todoReducer = (todos, action) => {
  switch (action.type) {
    case 'TOGGLE_TODO':
      todos[action.index].completed = !todos[action.index].completed
      break
    default:
      return
  }
}
