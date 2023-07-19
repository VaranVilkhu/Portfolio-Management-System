<template>
    <v-form @submit.prevent="submitPortfolio">
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field v-model="firstName" label="First Name"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field v-model="lastName" label="Last Name"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field v-model="course" label="Course"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field v-model="phoneNo" label="Phone Number" type="tel"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field v-model="branch" label="Branch"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field v-model.number="semesterTraining" label="Semester Training" type="number"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field v-model.number="cgpa" label="CGPA" type="number" step="0.01"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-checkbox v-model="internships" label="Internships"></v-checkbox>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field v-model="skills" label="Skills"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field v-model.number="rollNumber" label="Roll Number" type="number"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-btn type="submit" color="primary">Submit</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        course: '',
        phoneNo: '',
        branch: '',
        semesterTraining: null,
        cgpa: null,
        internships: false,
        skills: '',
        rollNumber: null,
      };
    },
    methods: {
      submitPortfolio() {
        const portfolioData = {
          firstName: this.firstName,
          lastName: this.lastName,
          course: this.course,
          phoneNo: this.phoneNo,
          branch: this.branch,
          semesterTraining: this.semesterTraining,
          cgpa: this.cgpa,
          internships: this.internships,
          skills: this.skills,
          rollNumber: this.rollNumber,
        };
        // Send the portfolioData object to your backend or perform desired actions
        console.log(portfolioData);
      },
    },
  };
  </script>