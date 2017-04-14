import events from './events'

/**
 * todos actions
 */
export default {
  [events.ADD_NEW_TASK]: ({ commit }) => {
    commit(events.ADD_NEW_TASK)
  },

  [events.REMOVE_TASK]: ({ commit }, payload) => {
    commit(events.REMOVE_TASK, payload)
  },

  [events.COMPLETE_TASK]: ({ commit }, payload) => {
    commit(events.COMPLETE_TASK, payload)
  }
}
