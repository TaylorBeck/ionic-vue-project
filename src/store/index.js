import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      users: [
        {
          id: "uuid1",
          name: "Britney Winters",
          age: 44,
          imageUrl: "https://i.ibb.co/DW9Cr7j/image-1.jpg",
          allergies: ["Peanut Butter"]
        },
        {
          id: "uuid2",
          name: "Antoine Jefferson",
          age: 30,
          imageUrl: "https://i.ibb.co/gdFgKPS/image-2.jpg",
          allergies: ["Dates", "Walnuts"]
        },
        {
          id: "uuid3",
          name: "Sandra Murkel",
          age: 74,
          imageUrl: "https://i.ibb.co/4dDtkVM/image-3.jpg",
          allergies: ["Apricots", "Oranges"]
        },
        {
          id: "uuid4",
          name: "Whitney Webb",
          age: 46,
          imageUrl: "https://i.ibb.co/mvSxGzD/image-4.jpg",
          allergies: ["Peanut Butter"]
        },
        {
          id: "uuid5",
          name: "Nathan Frederick",
          age: 20,
          imageUrl: "https://i.ibb.co/cvdsvnv/image-5.jpg",
          allergies: ["Peanut Butter"]
        },
        {
          id: "uuid6",
          name: "Danielle Brown",
          age: 55,
          imageUrl: "https://i.ibb.co/XDPyBBx/image-6.jpg",
          allergies: ["Almonds"]
        },
        {
          id: "uuid7",
          name: "Hope Turney",
          age: 37,
          imageUrl: "https://i.ibb.co/mJ1x5d5/image-7.jpg",
          allergies: ["Apricots"]
        },
        {
          id: "uuid8",
          name: "Jin Nguyen",
          age: 32,
          imageUrl: "https://i.ibb.co/ThWymsZ/image-8.jpg",
          allergies: ["Oranges"]
        },
        {
          id: "uuid9",
          name: "Anne Summers",
          age: 28,
          imageUrl: "https://i.ibb.co/CMYfG1K/image-9.jpg",
          allergies: null
        }
      ]
    };
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
