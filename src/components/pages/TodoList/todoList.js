import { mapMutations } from 'vuex'
import TaskModal from '../../TaskModal/TaskModal.vue'
import ConfirmDialog from '../../ConfirmDialog/ConfirmDialog.vue'
import Task from '../../Task/Task.vue'
import TaskApi from '../../../utils/taskApi.js'

const taskApi = new TaskApi()

export default {
  components: {
    TaskModal,
    Task,
    ConfirmDialog
  },
  data() {
    return {
      isTaskModalOpen: false,
      tasks: [],
      editingTask: null,
      selectedTasks: new Set(),
      isDeleteDialogOpen: false
    }
  },
  created() {
    this.getTasks()
  },
  watch: {
    editingTask(newValue) {
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
  computed: {
    isDeleteSelectedBtnDisabled() {
      return !this.selectedTasks.size
    },
    confirmDialogText() {
      return `You are going to delete ${this.selectedTasks.size} task(s), are you sure?`
    }
  },
  methods: {
    ...mapMutations(['toggleLoading']),
    toggleTaskModal() {
      this.isTaskModalOpen = !this.isTaskModalOpen
    },
    getTasks() {
      this.toggleLoading()
      taskApi
        .getTasks()
        .then((tasks) => {
          this.tasks = tasks
        })
        .catch(this.handleError)
        .finally(() => {
          this.toggleLoading()
        })
    },
    onTaskAdd(task) {
      this.toggleLoading()
      taskApi
        .addNewTask(task)
        .then((newTask) => {
          this.tasks.push(newTask)
          this.toggleTaskModal()
          this.$toast.success('The task have been created successfully!')
        })
        .catch(this.handleError)
        .finally(() => {
          this.toggleLoading()
        })
    },
    onTaskSave(editedTask) {
      return this.onTaskUpdate(editedTask)
        .then(() => {
          this.isTaskModalOpen = false
          this.$toast.success('The task have been updated successfully!')
        })
        .catch(this.handleError)
    },
    onTaskUpdate(editedTask) {
      return taskApi.updateTask(editedTask).then((updatedTask) => {
        this.findAndReplaceTask(updatedTask)
      })
    },
    findAndReplaceTask(updatedTask) {
      const index = this.tasks.findIndex((t) => t._id === updatedTask._id)
      this.tasks[index] = updatedTask
    },
    handleError(error) {
      this.$toast.error(error.message)
    },
    onTaskEdit(editingTask) {
      this.editingTask = editingTask
    },
    onTaskDelete(taskId) {
      taskApi
        .deleteTask(taskId)
        .then(() => {
          this.tasks = this.tasks.filter((t) => t._id !== taskId)
          this.$toast.success('The task have been deleted successfully!')
        })
        .catch(this.handleError)
    },
    toggleDeleteDialog() {
      this.isDeleteDialogOpen = !this.isDeleteDialogOpen
      if (!this.isDeleteDialogOpen) {
        this.selectedTasks.clear()
      }
    },
    onSelectedTasksDelete() {
      taskApi
        .deleteTasks([...this.selectedTasks])
        .then(() => {
          this.toggleDeleteDialog()
          this.tasks = this.tasks.filter((t) => !this.selectedTasks.has(t._id))
          this.selectedTasks.clear()
          this.$toast.success('The selected tasks have been deleted successfully!')
        })
        .catch(this.handleError)
    },
    toggleTaskId(taskId) {
      if (this.selectedTasks.has(taskId)) {
        this.selectedTasks.delete(taskId)
      } else {
        this.selectedTasks.add(taskId)
      }
    },
    onStatusChange(updatedTask) {
      this.onTaskUpdate(updatedTask)
        .then(() => {
          let message
          if (updatedTask.status === 'done') {
            message = 'The task have been completed successfully!'
          } else {
            message = 'You have successfully restored the task!'
          }
          this.$toast.success(message)
        })
        .catch(this.handleError)
    }
  }
}
