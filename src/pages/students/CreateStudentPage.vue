<template>
  <base-layout page-title="Add a Student">
    <template v-slot:actions-start>
      <ion-back-button default-href="/students"></ion-back-button>
    </template>
    <ion-grid>
      <ion-row>
        <ion-col size-xl="4" offset-xl="4" size-lg="8" offset-lg="2" size-md="10" offset-md="1">
          <create-student-form @create-student="createStudent" />
        </ion-col>
      </ion-row>
    </ion-grid>
  </base-layout>
</template>

<script>
import { IonGrid, IonRow, IonCol, IonBackButton } from "@ionic/vue";
import CreateStudentForm from "../../components/students/create/CreateStudentForm.vue";
export default {
  components: {
    IonGrid,
    IonRow,
    IonCol,
    CreateStudentForm,
    IonBackButton,
  },
  methods: {
    createStudent(studentData) {
      this.$store.dispatch("createStudent", studentData);
      this.$router.replace("/students"); // Replace to not allow back button
    },
  },
};
</script>
