<template>
  <ion-list v-if="users !== undefined">
    <user-list-item v-for="user in users" :key="user.id" :user="user"></user-list-item>
  </ion-list>
</template>

<script>
import { IonList } from "@ionic/vue";
import UserListItem from "./UserListItem";
export default {
  props: ["users"],
  components: {
    IonList,
    UserListItem,
  }
}
</script>