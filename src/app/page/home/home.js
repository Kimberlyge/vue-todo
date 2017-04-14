/**
 * @name home page
 */

// import todoItem from 'component/todo-item/todo-item.vue'

export default {
  name: 'home',

  data () {
    return {
      text: ''
    }
  },

  methods: {
    addTask () {
      this.$store.dispatch('ADD_NEW_TASK')
      this.text = ''
    },

    complete (payload) {
      this.$store.dispatch('COMPLETE_TASK', payload)
    },

    removeTask (payload) {
      this.$store.dispatch('REMOVE_TASK', payload)
    }
  },

  computed: {
    renderTodos () {
      // return this.$store.state.todos.filter(function (todo) {
      //   return !todo.completed
      // })
      return this.$store.state.todos
    }
  }
}
