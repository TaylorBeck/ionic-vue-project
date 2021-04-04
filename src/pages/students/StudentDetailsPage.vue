<template>
  <base-layout :page-title="student ? student.name : 'Student'">
    <template v-slot:actions-start>
      <ion-back-button default-href="/students"></ion-back-button>
    </template>
    <template v-slot:actions-end>
      <ion-button :router-link="editPath">
        <ion-icon :icon="pencil" color="light"></ion-icon>
      </ion-button>
    </template>
    <ion-grid>
      <ion-row>
        <ion-col size-xl="3" size-lg="5" size-md="6">
          <student-details :student="student"></student-details>
        </ion-col>
      </ion-row>
    </ion-grid>
  </base-layout>
</template>

<script>
import { IonGrid, IonRow, IonCol, IonBackButton, IonIcon, IonButton } from "@ionic/vue";
import StudentDetails from "../../components/students/StudentDetails.vue";
import { pencil } from "ionicons/icons";
export default {
  components: {
    IonGrid,
    IonRow,
    IonCol,
    StudentDetails,
    IonBackButton,
    IonIcon,
    IonButton,
  },
  data() {
    return {
      studentId: this.$route.params.id,
      pencil
    };
  },
  computed: {
    student() {
      return this.$store.getters.student(this.studentId);
    },
    editPath() {
      return `/students/${this.studentId}/edit`;
    },
  },
  watch: {
    $route(currentRoute) {
      this.studentId = currentRoute.params.id;
    },
  },
};
</script>
