<template>
    <v-app>
      <v-main>
        <v-container>
          <v-card>
            <v-card-title class="text-center">
              <h2>Add College</h2>
            </v-card-title>
            <v-card-text>
              <v-form @submit.prevent="addCollege">
                <v-text-field
                  v-model="collegeName"
                  label="College Name"
                  outlined
                  required
                ></v-text-field>
                <v-textarea
                  v-model="address"
                  label="Address"
                  outlined
                  required
                ></v-textarea>
                <v-text-field
                  v-model="phoneNumber"
                  label="Phone Number"
                  outlined
                  required
                ></v-text-field>
                <v-select
                  v-model="selectedCourses"
                  label="Courses Offered"
                  :items="courses"
                  outlined
                  multiple
                  required
                ></v-select>
                <v-checkbox
                  v-model="accreditation"
                  label="Accreditation"
                  outlined
                  required
                ></v-checkbox>
                <v-btn type="submit" color="primary">Add</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
  export default {
    data() {
      return {
        collegeName: '',
        address: '',
        phoneNumber: '',
        selectedCourses: [],
        courses: ['Course 1', 'Course 2', 'Course 3', 'Course 4'],
        accreditation: false,
      };
    },
    methods: {
      addCollege() {
        // Perform college submission logic here
        console.log('College Name:', this.collegeName);
        console.log('Address:', this.address);
        console.log('Phone Number:', this.phoneNumber);
        console.log('Courses Offered:', this.selectedCourses);
        console.log('Accreditation:', this.accreditation);
      },
    },
  };
  </script>