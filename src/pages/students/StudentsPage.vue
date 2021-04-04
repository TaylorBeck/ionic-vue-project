<template>
  <base-layout page-title="My Class" id="students-main-content">
    <template v-slot:actions-start>
      <ion-button @click="() => {}">
        <ion-icon :icon="menu" color="light"></ion-icon>
      </ion-button>
    </template>
    <template v-slot:actions-end>
      <ion-button router-link="/students/create">
        <ion-icon :icon="personAddOutline" color="light"></ion-icon>
      </ion-button>
    </template>
    <students-list :students="students" class="ion-padding-top"></students-list>
  </base-layout>
</template>

<script>
import { IonButton, IonIcon, } from "@ionic/vue";
import { personAddOutline, menu } from "ionicons/icons";

import StudentsList from "../../components/students/StudentsList";
export default {
  components: {
    IonButton,
    IonIcon,
    StudentsList,
  },
  data() {
    return { personAddOutline, menu };
  },
  computed: {
    students() {
      return this.$store.getters.students;
    },
  },
};
</script>
