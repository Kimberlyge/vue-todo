import events from './events'

/**
 * todos mutations
 */
export default {
  [events.ADD_NEW_TASK] (state) {
    state.todos.push({
      body: state.todo.text,
      completed: false
    })
  },

  [events.REMOVE_TASK] (state, payload) {
    state.todos.splice(state.todos.indexOf(payload), 1)
  },

  [events.COMPLETE_TASK] (state, payload) {
    payload.completed = true
  }
}
