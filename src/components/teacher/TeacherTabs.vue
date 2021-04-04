<template>
  <ion-tabs>
    <!-- TODO: Hook up tabs as top-level navigation -->
    <!--
      <ion-tab tab="assignments">[ASSIGNMENTSPAGE]</ion-tab>
      <ion-tab tab="students">[STUDENTSPAGE]</ion-tab>
      <ion-tab tab="schedule">[SCHEDULEPAGE]</ion-tab>
    -->
    <ion-tab-bar slot="bottom" color="tertiary">
      <ion-tab-button tab="assignments">
        <ion-label color="light">Assignments</ion-label>
        <ion-icon :icon="newspaper"></ion-icon>
      </ion-tab-button>
      <ion-tab-button tab="students" selected>
        <ion-label color="light">Students</ion-label>
        <ion-icon :icon="people"></ion-icon>
      </ion-tab-button>
      <ion-tab-button tab="schedule">
        <ion-label color="light">Schedule</ion-label>
        <ion-icon :icon="calendar"></ion-icon>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</template>

<script>
import { people, newspaper, calendar } from "ionicons/icons";
import {
  IonTabs,
  // IonTab,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
} from "@ionic/vue";
export default {
  data() {
    return {
      people,
      newspaper,
      calendar
    }
  },
  components: {
    IonTabs,
    // IonTab,
    IonTabBar,
    IonTabButton,
    IonLabel,
    IonIcon,
  },
};
</script>
