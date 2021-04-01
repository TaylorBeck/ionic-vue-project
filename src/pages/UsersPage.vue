<template>
  <base-layout page-title="Users">
    <ion-list>
      <ion-item
        v-for="user in users"
        :router-link="`/users/${user.id}`"
        :key="user.id"
        detail="true"
      >
        <ion-thumbnail slot="start">
          <ion-img :src="user.imageUrl" :alt="user.name"></ion-img>
        </ion-thumbnail>
        <ion-label>
          {{ user.name }}
        </ion-label>
      </ion-item>
    </ion-list>
  </base-layout>
</template>

<script>
import { IonList, IonItem, IonImg, IonThumbnail, IonLabel } from "@ionic/vue";
export default {
  components: {
    IonList,
    IonItem,
    IonImg,
    IonThumbnail,
    IonLabel,
  },
  computed: {
    users() {
      return this.$store.getters.users;
    }
  }
};
</script>

<style scoped>
ion-thumbnail {
  --border-radius: 5px;
}
</style>
