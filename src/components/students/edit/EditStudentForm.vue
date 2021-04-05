<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <input type="hidden" v-model="inputId" />
      <ion-item>
        <ion-label position="stacked">Name</ion-label>
        <ion-input type="text" required v-model="inputName" />
      </ion-item>
      <ion-item>
        <ion-label class="ion-padding-top" position="stacked">Date of Birth</ion-label>
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
      <ion-item>
        <ion-label position="stacked">Bio</ion-label>
        <ion-textarea rows="2" required v-model="inputBio" />
      </ion-item>
    </ion-list>
    <ion-button class="ion-padding-top ion-padding-bottom" type="submit" expand="block">Save</ion-button>
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
  IonIcon,
} from "@ionic/vue";
import { camera } from "ionicons/icons";

import { Plugins, CameraResultType } from "@capacitor/core";
const { Camera } = Plugins;

export default {
  props: ["student"],
  emits: ["edit-student"],
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonDatetime,
    IonTextarea,
    IonButton,
    IonThumbnail,
    IonIcon,
  },
  data() {
    return {
      inputId: this.student.id || "",
      inputName: this.student.name || "",
      inputGrade: this.student.grade || "",
      inputDateOfBirth: this.student.dateOfBirth || "",
      inputBio: this.student.bio || "",
      takenImageUrl: this.student.imageUrl || null,
      camera,
    };
  },
  methods: {
    async takePhotoClicked() {
      const image = await Camera.getPhoto({
        quality: 55,
        allowEditing: true,
        resultType: CameraResultType.Uri,
      });

      this.takenImageUrl = image.webPath;
    },
    submitForm() {
      const studentData = {
        id: this.inputId,
        name: this.inputName,
        grade: this.inputGrade,
        dateOfBirth: this.inputDateOfBirth,
        imageUrl: this.takenImageUrl,
        bio: this.inputBio,
      };
      this.$emit("edit-student", studentData);
    },
  },
};
</script>
