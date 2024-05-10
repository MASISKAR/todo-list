import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(['increment', 'decrement']),
    plus() {
      this.increment()
    },
    minus() {
      this.decrement()
    }
  }
}
