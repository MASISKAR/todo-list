import TaskModal from '../TaskModal/TaskModal.vue'
import Task from '../Task/Task.vue'
import TaskApi from '../../utils/taskApi.js'

const taskApi = new TaskApi()

export default {
  components: {
    TaskModal,
    Task
  },
  data() {
    return {
      isTaskModalOpen: false,
      tasks: [],
      editingTask: null
    }
  },
  created() {
    this.getTasks()
  },
  watch: {
    editingTask(newValue) {
      console.log('eitingtask new value', newValue)
      if (newValue) {
        this.isTaskModalOpen = true
      }
    },
    isTaskModalOpen(isOpen) {
      if (!isOpen && this.editingTask) {
        this.editingTask = null
      }
    }
  },
  methods: {
    toggleTaskModal() {
      this.isTaskModalOpen = !this.isTaskModalOpen
    },
    getTasks() {
      taskApi
        .getTasks()
        .then((tasks) => {
          this.tasks = tasks
        })
        .catch(this.handleError)
    },
    onTaskAdd(task) {
      taskApi
        .addNewTask(task)
        .then((newTask) => {
          this.tasks.push(newTask)
          this.toggleTaskModal()
          this.$toast.success('The task have been created successfully!')
        })
        .catch(this.handleError)
    },
    onTaskSave(editedTask) {
      console.log('editedTask', editedTask)
      taskApi
        .updateTask(editedTask)
        .then((updatedTask) => {
          // find and replace the task
          // use findIndex  this.tasks  task._id === updatedTask._id
          // this.tasks[index] = updatedTask
          // close the task modal
          this.$toast.success('The task have been updated successfully!')
        })
        .catch(this.handleError)
    },
    handleError(error) {
      this.$toast.error(error.message)
    },
    onTaskEdit(editingTask) {
      console.log('taskedit')
      this.editingTask = editingTask
    }
  }
}
