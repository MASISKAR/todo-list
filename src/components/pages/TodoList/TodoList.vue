<template>
  <v-container>
    <task-modal
      v-if="isTaskModalOpen"
      :isOpen="isTaskModalOpen"
      :editingTask="editingTask"
      @close="toggleTaskModal"
      @taskSave="onTaskSave"
      @taskAdd="onTaskAdd"
    />

    <v-row align="center" justify="center">
      <v-col cols="auto">
        <v-btn color="info" @click="toggleTaskModal">Add new task</v-btn>
      </v-col>
    </v-row>
  </v-container>

  <!-- <task v-memo="[tasks[0], isTaskModalOpen]" :data="tasks[0]" /> -->
  <!-- <task v-once :data="tasks[1]" @taskEdit="onTaskEdit(taskData)" /> -->

  <v-container>
    <v-row>
      <v-col v-for="taskData in tasks" :key="taskData._id" cols="12" xs="12" sm="6" md="4" lg="3">
        <task
          :data="taskData"
          @taskEdit="onTaskEdit(taskData)"
          @taskDelete="onTaskDelete(taskData._id)"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="./todoList.js"></script>
