<template>
  <ion-menu side="start" content-id="students-main-content">
    <ion-header>
      <ion-toolbar translucent>
        <ion-title>Teaching Hub</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>
          <ion-icon name="warning" slot="start"></ion-icon>
          <ion-label>Alerts</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script>
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
} from "@ionic/vue";
import { mail, warning } from "ionicons/icons";
export default {
  data() {
    return {
      mail,
      warning,
    };
  },
  components: {
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonIcon,
    IonLabel,
  },
};
</script>
