<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="stacked">Name</ion-label>
        <ion-input type="text" required v-model="inputName" />
      </ion-item>
      <ion-item class="ion-padding-top">
        <ion-label position="stacked">Date of Birth</ion-label>
        <ion-datetime
          display-format="MM/DD/YYYY"
          min="1960-01-01"
          max="2015-12-31"
          v-model="inputDateOfBirth"
        />
      </ion-item>
      <ion-item class="ion-padding-top ion-padding-bottom">
        <ion-thumbnail slot="start">
          <img :src="takenImageUrl" />
        </ion-thumbnail>
        <ion-button type="button" fill="clear" @click="takePhotoClicked">
          <ion-icon slot="start" :icon="camera"></ion-icon>
          Take Photo
        </ion-button>
      </ion-item>
    </ion-list>
    <ion-button type="submit" expand="block" class="ion-padding-top ion-padding-bottom">Sign Up</ion-button>
  </form>
</template>

<script>
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonDatetime,
  IonButton,
  IonThumbnail,
  IonIcon,
} from "@ionic/vue";
import { camera } from "ionicons/icons";

import { Plugins, CameraResultType } from "@capacitor/core";
const { Camera } = Plugins;

export default {
  emits: ["create-teacher"],
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonDatetime,
    IonButton,
    IonThumbnail,
    IonIcon,
  },
  data() {
    return {
      inputName: "",
      inputGrade: "",
      inputDateOfBirth: "",
      inputBio: "",
      takenImageUrl: "https://i.ibb.co/WDrMwvK/profile-Placeholder.png",
      camera,
    };
  },
  methods: {
    async takePhotoClicked() {
      // Capacitor camera plugin: https://capacitorjs.com/docs/apis/camera#example
      const image = await Camera.getPhoto({
        quality: 55,
        allowEditing: true,
        resultType: CameraResultType.Uri,
      });

      // Replace the placeholder thumbnail
      this.takenImageUrl = image.webPath;
    },
    submitForm() {
      const studentData = {
        name: this.inputName,
        grade: this.inputGrade,
        dateOfBirth: this.inputDateOfBirth,
        imageUrl: this.takenImageUrl,
        bio: this.inputBio,
      };
      this.$emit("create-student", studentData);
    },
  },
};
</script>

<style scoped>
ion-textarea {
 --background: var(--ion-color-light);
}
</style>