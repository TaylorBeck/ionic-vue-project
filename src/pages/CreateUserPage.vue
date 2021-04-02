<template>
  <base-layout page-title="Create a User" page-default-back-link="/users">
    <create-user-form @create-user="saveUser" />
  </base-layout>
</template>

<script>
import CreateUserForm from "../components/users/create/CreateUserForm.vue";
export default {
  components: {
    CreateUserForm
  },
  methods: {
    saveUser(userData) {
      this.$store.dispatch("createUser", userData);
      this.$router.replace("/users"); // Replace to not allow back button
    }
  }
};
</script>
