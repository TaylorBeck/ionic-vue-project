<template>
  <base-layout page-title="Sign Up">
    <ion-grid>
      <ion-row>
        <ion-col size-xl="4" offset-xl="4" size-lg="8" offset-lg="2" size-md="10" offset-md="1">
          <sign-up-form @submit="signUp" />
        </ion-col>
      </ion-row>
    </ion-grid>
  </base-layout>
</template>

<script>
import BaseLayout from "../components/base/BaseLayout.vue";
import SignUpForm from "../components/signup/SignUpForm.vue";
export default {
  components: {
    SignUpForm,
    BaseLayout
  }
}
</script>
