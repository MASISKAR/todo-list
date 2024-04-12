import TaskModal from '../TaskModal/TaskModal.vue'

export default {
  components: {
    TaskModal
  },
  data() {
    return {
      isTaskModalOpen: false,
      tasks: []
    }
  },
  methods: {
    toggleTaskModal() {
      this.isTaskModalOpen = !this.isTaskModalOpen
    },
    onTaskSave(task) {
      console.log(task)
      // send the task to backend
      this.tasks.push(task)
      this.toggleTaskModal()
    }
  }
}
