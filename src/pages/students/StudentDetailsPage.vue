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
import {
  IonGrid,
  IonRow,
  IonCol,
  IonBackButton,
  IonIcon,
  IonButton,
  toastController,
} from "@ionic/vue";
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
      pencil,
    };
  },
  methods: {
    async openToast(message, type) {
      const toast = await toastController.create({
        message,
        duration: 1750,
        color: type
      });
      return toast.present();
    },
  },
  computed: {
    student() {
      return this.$store.getters.student(this.studentId);
    },
    editPath() {
      return `/students/${this.studentId}/edit`;
    },
    flash() {
      return this.$store.getters.flash;
    }
  },
  watch: {
    $route(currentRoute) {
      this.studentId = currentRoute.params.id;
    },
  },
  mounted() {
    const { message, type } = this.flash;
    console.log("MESSAGE: ", message);
    console.log("TYPE: ", type);

    if (message && type) {
      console.log("MESSAGE AND TYPE, OPEN TOAST")
      this.$store.dispatch("clearFlash");
      this.openToast(message, type);
    }
  },
};
</script>
