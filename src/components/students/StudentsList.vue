<template>
  <ion-list v-if="students !== undefined">
    <student-list-item v-for="student in students" :key="student.id" :student="student"></student-list-item>
  </ion-list>
</template>

<script>
import { IonList } from "@ionic/vue";
import StudentListItem from "./StudentListItem";
export default {
  props: ["students"],
  components: {
    IonList,
    StudentListItem,
  }
}
</script>