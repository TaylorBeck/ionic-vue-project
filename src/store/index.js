import { createStore } from "vuex";
import { v4 as uuidv4 } from "uuid";

import USERS from "../data/users";

const store = createStore({
  state() {
    return {
      users: USERS
    };
  },
  mutations: {
    createUser(state, userData) {
      const newUser = {
        id: uuidv4(),
        name: userData.name,
        age: userData.age,
        profession: userData.profession,
        imageUrl: userData.imageUrl,
        bio: userData.bio,
        allergies: [{ id: 1, name: "Peanut Butter" }],
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      };

      state.users.unshift(newUser);
    }
  },
  actions: {
    createUser(context, userData) {
      // TODO: Make POST request to create user in database
      context.commit("createUser", userData);
    }
  },
  getters: {
    users(state) {
      return state.users;
    },
    user(state) {
      return (userId) => {
        return state.users.find((user) => user.id === userId);
      };
    }
  }
});

export default store;
