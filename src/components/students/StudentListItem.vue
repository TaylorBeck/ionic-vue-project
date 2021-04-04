<template>
  <ion-item
    v-if="student !== undefined"
    :router-link="`/students/${student.id}`"
    detail="true"
  >
    <ion-thumbnail slot="start">
      <ion-img :src="student.imageUrl" :alt="student.name"></ion-img>
    </ion-thumbnail>
    <ion-label>
      {{ student.name }}
    </ion-label>
  </ion-item>
</template>

<script>
import { IonItem, IonThumbnail, IonImg, IonLabel } from "@ionic/vue";
export default {
  props: ["student"],
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
