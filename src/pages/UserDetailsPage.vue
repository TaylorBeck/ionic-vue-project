<template>
  <base-layout
    :page-title="user ? user.name : 'Loading...'"
    page-default-back-link="/users"
  >
    <ion-grid>
      <ion-row>
        <user-details :user="user"></user-details>
      </ion-row>
    </ion-grid>
  </base-layout>
</template>

<script>
import { IonGrid, IonRow } from "@ionic/vue";
import UserDetails from "../components/users/UserDetails.vue";
export default {
  components: {
    IonGrid,
    IonRow,
    UserDetails,
  },
  data() {
    return {
      userId: this.$route.params.id,
    };
  },
  computed: {
    user() {
      return this.$store.getters.user(this.userId);
    },
  },
  watch: {
    $route(currentRoute) {
      this.userId = currentRoute.params.id;
    },
  },
};
</script>
