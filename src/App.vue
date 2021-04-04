<template>
  <ion-app>
    <ion-router-outlet />
    <teacher-tabs></teacher-tabs>
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { defineComponent } from "vue";

import TeacherTabs from "./components/teacher/TeacherTabs.vue";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
    TeacherTabs
  },
});
</script>