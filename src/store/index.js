import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      users: [
        {
          id: "uuid1",
          name: "Britney Winters",
          profession: "Artist",
          age: 44,
          imageUrl: "https://i.ibb.co/DW9Cr7j/image-1.jpg",
          bio: "Hipster-friendly gamer. Typical pop culture maven. Internet junkie. Tv ninja. Certified bacon expert.",
          allergies: [{ id: 1, name: "Peanut Butter"}]
        },
        {
          id: "uuid2",
          name: "Antoine Jefferson",
          profession: "Salesperson",
          age: 30,
          imageUrl: "https://i.ibb.co/gdFgKPS/image-2.jpg",
          bio: "Certified gamer. Problem solver. Internet enthusiast. Twitter scholar. Infuriatingly humble alcohol geek. Tv guru.",
          allergies: []
        },
        {
          id: "uuid3",
          name: "Sandra Murkel",
          profession: "Nurse",
          age: 74,
          imageUrl: "https://i.ibb.co/4dDtkVM/image-3.jpg",
          bio: "Internetaholic. Friend of animals everywhere. Infuriatingly humble creator. Typical bacon guru. Alcohol aficionado. Food junkie.",
          allergies: [{ id: 3, name: "Limes"}, { id: 12, name: "Guacamole"}]
        },
        {
          id: "uuid4",
          name: "Whitney Webb",
          profession: "Fisher",
          age: 46,
          imageUrl: "https://i.ibb.co/mvSxGzD/image-4.jpg",
          bio: "Student. Food lover. Freelance twitter ninja. Tv expert. Devoted music fan.",
          allergies: [{ id: 4, name: "Shellfish"}, { id: 11, name: "Pears"}]
        },
        {
          id: "uuid5",
          name: "Nathan Frederick",
          profession: "Gourmet Chef",
          age: 20,
          imageUrl: "https://i.ibb.co/cvdsvnv/image-5.jpg",
          bio: "Analyst. Certified introvert. Coffee specialist. Music nerd. Communicator. Freelance reader. General travel advocate. Twitter fanatic. Extreme tv fan.",
          allergies: [{ id: 5, name: "Kombucha"}]
        },
        {
          id: "uuid6",
          name: "Danielle Brown",
          profession: "Sommelier",
          age: 55,
          imageUrl: "https://i.ibb.co/XDPyBBx/image-6.jpg",
          bio: "Wannabe travel evangelist. Devoted bacon nerd. Unapologetic social media geek. Certified beeraholic. Zombie maven. Total explorer.",
          allergies: [{ id: 6, name: "Walnuts"}, { id: 10, name: "Almonds" }]
        },
        {
          id: "uuid7",
          name: "Hope Turney",
          profession: "Food Truck Owner",
          age: 37,
          imageUrl: "https://i.ibb.co/mJ1x5d5/image-7.jpg",
          bio: "Certified web fanatic. Twitter scholar. Beer nerd. Reader. Zombie geek. Wannabe tv advocate. Avid social media expert. Analyst.",
          allergies: [{ id: 7, name: "Shellfish"}]
        },
        {
          id: "uuid8",
          name: "Jin Nguyen",
          profession: "4th Grade Teacher",
          age: 32,
          imageUrl: "https://i.ibb.co/ThWymsZ/image-8.jpg",
          bio: "Bacon lover. Total zombie practitioner. Explorer. Travel geek. Wannabe beer buff. Writer.",
          allergies: [{ id: 8, name: "Peanut Butter"}]
        },
        {
          id: "uuid9",
          name: "Anne Summers",
          profession: "Apple Farmer",
          age: 28,
          imageUrl: "https://i.ibb.co/CMYfG1K/image-9.jpg",
          bio: "Pop culture geek. Zombie enthusiast. Writer. Total coffeeaholic. Alcohol guru. General travel trailblazer.",
          allergies: [{ id: 9, name: "Avacadoes"}]
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
