<template>
  <base-layout page-title="Users">
    <template v-slot:actions-end>
      <ion-button router-link="/users/create">
        <ion-icon :icon="personAddOutline"></ion-icon>
      </ion-button>
    </template>
    <users-list :users="users" class="ion-padding"></users-list>
  </base-layout>
</template>

<script>
import { IonButton, IonIcon } from "@ionic/vue";
import { personAddOutline } from "ionicons/icons";

import UsersList from "../components/users/UsersList";
export default {
  components: {
    IonButton,
    IonIcon,
    UsersList,
  },
  data() {
    return { personAddOutline };
  },
  computed: {
    users() {
      return this.$store.getters.users;
    },
  },
};
</script>
