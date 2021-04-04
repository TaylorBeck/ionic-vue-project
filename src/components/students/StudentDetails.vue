<template>
  <ion-card v-if="student !== undefined" size="auto">
    <img :src="student.imageUrl" :alt="student.name" />
    <ion-card-header>
      <ion-card-subtitle>{{ student.profession.toUpperCase() }}</ion-card-subtitle>
      <ion-card-title>{{ student.name }}</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      {{ student.bio }}
    </ion-card-content>
    <ion-card-content v-if="student.allergies.length > 0">
      <ion-card-subtitle>Allergies</ion-card-subtitle>
      <allergy-chip
        v-for="(allergy, index) in student.allergies"
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
import AllergyChip from "../allergies/AllergyChip.vue";
export default {
  props: ["student"],
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
