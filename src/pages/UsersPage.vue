<template>
  <base-layout page-title="Users">
    <users-list :users="users"></users-list>
  </base-layout>
</template>

<script>
import UsersList from "../components/users/UsersList";
export default {
  components: {
    UsersList
  },
  computed: {
    users() {
      return this.$store.getters.users;
    }
  }
};
</script>
