<template>
  <base-layout page-title="Edit Student">
    <template v-slot:actions-start>
      <ion-back-button :default-href="backPath"></ion-back-button>
    </template>
    <ion-grid>
      <ion-row>
        <ion-col
          size-xl="4"
          offset-xl="4"
          size-lg="8"
          offset-lg="2"
          size-md="10"
          offset-md="1"
        >
          <edit-student-form :student="student" @edit-student="editStudent" />
        </ion-col>
      </ion-row>
    </ion-grid>
  </base-layout>
</template>

<script>
import { IonGrid, IonRow, IonCol, IonBackButton } from "@ionic/vue";
import EditStudentForm from "../../components/students/edit/EditStudentForm";
export default {
  data() {
    return {
      studentId: this.$route.params.id,
      backPath: `/students/${this.studentId}`,
    };
  },
  computed: {
    student() {
      return this.$store.getters.student(this.studentId);
    },
  },
  components: {
    IonGrid,
    IonRow,
    IonCol,
    EditStudentForm,
    IonBackButton,
  },
  methods: {
    editStudent(studentData) {
      // Dispatch editStudent action, which will mutate current student
      this.$store.dispatch("editStudent", studentData);

      
      this.$router.replace(`/students/${studentData.id}`);
    },
  },
  watch: {
    $route(currentRoute) {
      this.studentId = currentRoute.params.id;
    },
  },
};
</script>
