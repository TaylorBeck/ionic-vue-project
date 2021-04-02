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
        <ion-label position="floating">Image URL</ion-label>
        <ion-input type="url" required v-model="inputImageUrl" />
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
} from "@ionic/vue";
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
  },
  data() {
    return {
      inputName: "",
      inputProfession: "",
      inputDateOfBirth: "",
      inputImageUrl: "",
      inputBio: "",
    };
  },
  methods: {
    submitForm() {
      const userData = {
        name: this.inputName,
        profession: this.inputProfession,
        dateOfBirth: this.inputDateOfBirth,
        imageUrl: this.inputImageUrl,
        bio: this.inputBio,
      };
      this.$emit("create-user", userData);
    },
  },
};
</script>