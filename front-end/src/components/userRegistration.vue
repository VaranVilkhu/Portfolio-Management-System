<template>
    <v-container>
      <v-card>
        <v-card-title>
          User Registration
        </v-card-title>
        <v-card-text>
          <v-form @submit.prevent="registerUser">
            <v-text-field v-model="email" label="Email" required></v-text-field>
            <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
            <v-text-field v-model="confirmPassword" label="Confirm Password" type="password" :rules="[passwordMatchRule]" required></v-text-field>
            <v-select v-model="role" :items="roleOptions" label="Role" required></v-select>
            <v-btn type="submit" color="primary">Register</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: '',
        role: '',
        roleOptions: ['student', 'college'],
        passwordMatchRule: (value) => value === this.password || 'Passwords do not match'
      }
    },
    methods: {
      registerUser() {
        // Perform user registration logic here
        console.log('User registered:', {
          email: this.email,
          password: this.password,
          role: this.role
        });
      }
    }
  }
  </script>
  
  