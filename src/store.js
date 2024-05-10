import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      count: 0,
      message: 'hello',
      task: null,
      tasks: ['df', 'sdf', 'dsf'],
      isLoading: false
    }
  },
  mutations: {
    toggleLoading(state) {
      state.isLoading = !state.isLoading
    },

    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    }
  },
  getters: {
    isLoading: (state) => state.isLoading,

    counter(state) {
      return state.count
    },
    myMessage(state) {
      return state.message + ' from vuex'
    },
    tasksCount(state) {
      return state.tasks.length
    }
  }
})

export { store }
