<template>
  <ion-card v-if="user !== undefined">
    <img :src="user.imageUrl" :alt="user.name" />
    <ion-card-header>
      <ion-card-subtitle>{{ user.profession.toUpperCase() }}</ion-card-subtitle>
      <ion-card-title>{{ user.name }}</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      {{ user.bio }}
    </ion-card-content>
    <ion-card-content v-if="user.allergies.length > 0">
      <ion-card-subtitle>Allergies</ion-card-subtitle>
      <allergy-chip
        v-for="(allergy, index) in user.allergies"
        :key="index + 1"
        :allergy="allergy"
      ></allergy-chip>
    </ion-card-content>
  </ion-card>
</template>

<script>
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from "@ionic/vue";
import AllergyChip from "./allergies/AllergyChip.vue";
export default {
  props: ["user"],
  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    AllergyChip,
  },
};
</script>

<style scoped>
ion-card {
  --background: var(--ion-color-light);
}
</style>
