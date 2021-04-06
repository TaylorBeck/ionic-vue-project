<template>
  <!-- menuId for activation button & content-id for router-outlet -->
  <ion-menu side="start" content-id="main-content">
    <ion-header>
      <ion-toolbar translucent>
        <ion-title>Teaching Hub</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>
          <ion-icon :icon="mail" slot="start"></ion-icon>
          <ion-label>Inbox</ion-label>
        </ion-item>
        <ion-item>
          <ion-icon :icon="barChart" slot="start"></ion-icon>
          <ion-label>Grades</ion-label>
        </ion-item>
        <ion-item>
          <ion-icon :icon="peopleCircle" slot="start"></ion-icon>
          <ion-label>Faculty</ion-label>
        </ion-item>
        <ion-item>
          <ion-icon :icon="newspaper" slot="start"></ion-icon>
          <ion-label>News</ion-label>
        </ion-item>
        <ion-item>
          <ion-icon :icon="construct" slot="start"></ion-icon>
          <ion-label>Settings</ion-label>
        </ion-item>
        <ion-item>
          <ion-icon :icon="helpCircle" slot="start"></ion-icon>
          <ion-label>Help</ion-label>
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
import {
  mail,
  peopleCircle,
  barChart,
  construct,
  helpCircle,
  newspaper,
} from "ionicons/icons";
export default {
  data() {
    return {
      mail,
      peopleCircle,
      barChart,
      construct,
      helpCircle,
      newspaper,
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
