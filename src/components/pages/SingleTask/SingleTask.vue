<template>
  <v-card v-if="task" class="mx-auto my-8" elevation="16" width="auto">
    <v-card-item>
      <v-card-title> {{ task.title }} </v-card-title>
    </v-card-item>

    <v-card-text>
      {{ task.description }}
    </v-card-text>

    <v-card-text> Status: {{ task.status }} </v-card-text>

    <v-card-text> Created at: {{ createdAt }} </v-card-text>

    <v-card-text> Due date: {{ dueDate }} </v-card-text>

    <v-card-actions>
      <v-btn color="success" variant="elevated">
        <v-icon icon="mdi-check-outline" />
      </v-btn>
      <v-btn color="warning" variant="elevated" @click="onEdit">
        <v-icon icon="mdi-archive-edit-outline" />
      </v-btn>
      <v-btn color="error" variant="elevated" @click="onDelete">
        <v-icon icon="mdi-delete-outline" />
      </v-btn>
    </v-card-actions>
  </v-card>
  <h4 v-else>Task not found!</h4>
</template>

<script src="./singleTask.js"></script>
