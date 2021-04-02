<template>
  <ion-chip>
    <ion-icon :icon="alertCircleOutline" color="warning"></ion-icon>
    <ion-label>{{ allergy.name }}</ion-label>
  </ion-chip>
</template>

<script>
import { IonChip, IonIcon, IonLabel } from "@ionic/vue";
import { alertCircleOutline } from "ionicons/icons";
export default {
  props: ["allergy"],
  components: {
    IonChip,
    IonIcon,
    IonLabel,
  },
  setup() {
    return { alertCircleOutline };
  },
};
</script>
