<template>
  <ion-app>
    <teacher-tabs></teacher-tabs>
  </ion-app>
</template>

<script>
import { IonApp } from "@ionic/vue";
import { defineComponent } from "vue";

import TeacherTabs from "./components/teacher/TeacherTabs.vue";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    TeacherTabs
  },
  mounted() {
    if (this.$store.getters.students.length === 0) {
      this.$store.dispatch("setStudents");
    }
  }
});
</script>
