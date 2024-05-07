import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['counter', 'myMessage', 'task', 'tasksCount']),
    isOpen() {}
  }
}
