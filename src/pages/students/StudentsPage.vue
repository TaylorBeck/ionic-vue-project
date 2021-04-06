<template>
  <base-layout page-title="My Class" id="main-content">
    <template v-slot:menu-drawer>
      <side-menu></side-menu>
    </template>
    <template v-slot:actions-start>
      <ion-button @click="openMenu">
        <ion-icon :icon="menu" color="light"></ion-icon>
      </ion-button>
    </template>
    <template v-slot:actions-end>
      <ion-button router-link="/students/create">
        <ion-icon :icon="personAddOutline" color="light"></ion-icon>
      </ion-button>
    </template>
    <students-list
      :students="myStudents"
      class="ion-padding-top"
    ></students-list>
  </base-layout>
</template>

<script>
import { IonButton, IonIcon, menuController } from "@ionic/vue";
import { personAddOutline, menu } from "ionicons/icons";

import StudentsList from "../../components/students/StudentsList";
import SideMenu from "../../components/side-menu/SideMenu.vue";

export default {
  components: {
    IonButton,
    IonIcon,
    StudentsList,
    SideMenu,
  },
  data() {
    return {
      personAddOutline,
      menu,
    };
  },
  computed: {
    myStudents() {
      return this.$store.getters.students;
    },
  },
  methods: {
    openMenu() {
      menuController.open();
    },
  },
};
</script>
