<template>
  <template>
    <div class="pa-4 text-center">
      <v-dialog v-model="isOpen" max-width="600">
        <v-card prepend-icon="mdi-account" title="Add new task">
          <v-card-text>
            <v-row dense>
              <v-col cols="12" sm="12">
                <v-text-field label="Title*" required v-model="title"></v-text-field>
              </v-col>

              <v-col cols="12" sm="12">
                <v-textarea label="Description" v-model="description"></v-textarea>
              </v-col>
              <v-col cols="12" sm="12">
                <!-- <v-date-picker /> -->
              </v-col>
            </v-row>

            <small class="text-caption text-medium-emphasis">*indicates required field</small>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="warning" text="Close" variant="plain" @click="onClose"></v-btn>

            <v-btn color="success" text="Save" variant="tonal" @click="onSave"></v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>
</template>

<script src="./taskModal.js"></script>
