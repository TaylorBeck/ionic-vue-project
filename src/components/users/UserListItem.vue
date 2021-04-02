<template>
  <ion-item
    v-if="user !== undefined"
    :router-link="`/users/${user.id}`"
    detail="true"
  >
    <ion-thumbnail slot="start">
      <ion-img :src="user.imageUrl" :alt="user.name"></ion-img>
    </ion-thumbnail>
    <ion-label>
      {{ user.name }}
    </ion-label>
  </ion-item>
</template>

<script>
import { IonItem, IonThumbnail, IonImg, IonLabel } from "@ionic/vue";
export default {
  props: ["user"],
  components: {
    IonItem,
    IonThumbnail,
    IonImg,
    IonLabel,
  },
};
</script>

<style scoped>
ion-thumbnail {
  --border-radius: 5px;
}
</style>
