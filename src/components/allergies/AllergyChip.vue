<template>
  <ion-chip>
    <ion-icon :icon="alertCircleOutline" color="danger"></ion-icon>
    <ion-label>{{ allergy }}</ion-label>
  </ion-chip>
</template>

<script>
import { IonChip, IonIcon, IonLabel } from "@ionic/vue";
import { alertCircleOutline } from "ionicons/icons";
export default {
  props: ["allergy"],
  data() {
    return { alertCircleOutline };
  },
  components: {
    IonChip,
    IonIcon,
    IonLabel,
  },
};
</script>
