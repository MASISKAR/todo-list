<template>
  <h1>Contact us</h1>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" lg="6" md="6" sm="8" xs="12">
        <v-sheet class="mx-auto">
          <v-form ref="form">
            <v-text-field
              v-model.trim="name"
              :rules="nameRules"
              label="Name"
              required
            ></v-text-field>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Email"
              required
              type="email"
            ></v-text-field>
            <v-textarea label="Message" v-model.trim="message"></v-textarea>

            <div class="d-flex flex-column">
              <v-btn class="mt-4" color="success" block @click="sendForm"> Send </v-btn>

              <v-btn class="mt-4" color="error" block @click="reset"> Reset Form </v-btn>
            </div>
          </v-form>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="./contact.js"></script>
