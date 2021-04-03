<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Name</ion-label>
        <ion-input type="text" required v-model="inputName" />
      </ion-item>
      <ion-item>
        <ion-label position="floating">MM/DD/YYYY</ion-label>
        <ion-datetime display-format="MM/DD/YYYY" min="1960-01-01" max="2015-12-31" v-model="inputDateOfBirth" />
      </ion-item>
      <ion-item>
        <ion-thumbnail slot="start">
          <img :src="takenImageUrl" />
        </ion-thumbnail>
        <ion-button type="button" fill="clear" @click="takePhotoClicked">
          <ion-icon slot="start" :icon="camera"></ion-icon>
          Take Photo
        </ion-button>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Bio</ion-label>
        <ion-textarea rows="7" required v-model="inputBio" />
      </ion-item>
    </ion-list>
    <ion-button type="submit" expand="block">Save</ion-button>
  </form>
</template>

<script>
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonDatetime,
  IonTextarea,
  IonButton,
  IonThumbnail,
  IonIcon
} from "@ionic/vue";
import { camera } from "ionicons/icons";

import { Plugins, CameraResultType, CameraSource } from "@capacitor/core";
const { Camera } = Plugins;

export default {
  emits: ["create-user"],
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonDatetime,
    IonTextarea,
    IonButton,
    IonThumbnail,
    IonIcon
  },
  data() {
    return {
      inputName: "",
      inputProfession: "",
      inputDateOfBirth: "",
      inputBio: "",
      takenImageUrl: null,
      camera
    };
  },
  methods: {
    async takePhotoClicked() {
      const image = await Camera.getPhoto({
        quality: 55,
        allowEditing: true,
        resultType: CameraResultType.Uri
      });

      this.takenImageUrl = image.webPath;
    },
    submitForm() {
      const userData = {
        name: this.inputName,
        profession: this.inputProfession,
        dateOfBirth: this.inputDateOfBirth,
        imageUrl: this.takenImageUrl,
        bio: this.inputBio,
      };
      this.$emit("create-user", userData);
    },
  },
};
</script>