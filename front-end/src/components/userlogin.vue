<template>
    <v-app>
      <v-main>
        <v-container fluid>
          <v-row justify="center">
            <v-col cols="12" sm="8" md="6">
              <v-card class="login-card">
                <v-card-title class="text-center">
                  <h2>Login</h2>
                </v-card-title>
                <v-card-text>
                  <v-form @submit.prevent="login">
                    <v-text-field
                      v-model="email"
                      label="Email"
                      type="email"
                      outlined
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="password"
                      label="Password"
                      type="password"
                      outlined
                      required
                    ></v-text-field>
                    <v-radio-group v-model="role" row>
                      <v-radio label="Student" value="student"></v-radio>
                      <v-radio label="College" value="college"></v-radio>
                    </v-radio-group>
                    <v-btn type="submit" color="primary" block>Login</v-btn>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        role: 'student',
      };
    },
    methods: {
      login() {
        // Perform login logic here
        console.log('Email:', this.email);
        console.log('Password:', this.password);
        console.log('Role:', this.role);
      },
    },
  };
  </script>
  
  <style>
  .login-card {
    margin-top: 100px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 24px;
  }
  
  .text-center {
    text-align: center;
  }
  
  .login-card h2 {
    margin-top: 0;
  }
  
  .v-btn--block {
    margin-top: 16px;
  }
  
  /* Custom colors */
  .primary--text {
    color: #2196f3 !important;
  }
  
  .secondary--text {
    color: #757575 !important;
  }
  </style>