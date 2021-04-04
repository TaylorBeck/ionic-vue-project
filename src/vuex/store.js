import { createStore } from "vuex";
import { v4 as uuidv4 } from "uuid";

import STUDENTS from "../data/students";
import { BASE_URL, PUBLIC_API_KEY } from "../constants";
import { getRandomAllergy } from "../helpers";

const store = createStore({
  state() {
    return {
      students: STUDENTS,
      isCreating: false,
      isUpdating: false
    };
  },
  mutations: {
    createStudent(state, studentData) {
      const newStudent = {
        id: uuidv4(),
        name: studentData.name,
        age: studentData.age,
        profession: studentData.profession,
        imageUrl: studentData.imageUrl,
        bio: studentData.bio,
        allergies: [getRandomAllergy(), getRandomAllergy()],
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      };

      state.students.unshift(newStudent);
    },
    editStudent(state, studentData) {
      const updatedStudentData = {
        id: studentData.id,
        name: studentData.name,
        age: studentData.age,
        profession: studentData.profession,
        imageUrl: studentData.imageUrl,
        bio: studentData.bio,
        updatedAt: new Date().toDateString()
      };

      let index = state.students.findIndex(student => student.id === studentData.id);
      // Replace existing key values with updated values
      Object.assign(state.students[index], updatedStudentData);

      // try {
      //   const response = await axios.get(`${BASE_URL}?api_key=${PUBLIC_API_KEY}`);
      //   console.log(response.data);
      // } catch (error) {
      //   console.log(error.message);
      // }
    },
    setIsCreating(state, isCreating) {
      state.isCreating = isCreating
    },
    setIsUpdating(state, isUpdating) {
      state.isUpdating = isUpdating
    },
  },
  actions: {
    createStudent(context, studentData) {
      // TODO: Make POST request to create student in database
      context.commit("createStudent", studentData);
    },
    editStudent(context, studentData) {
      context.commit("editStudent", studentData);
    },
    deleteStudent(context, studentId) {

    }
  },
  getters: {
    students(state) {
      return state.students;
    },
    student(state) {
      return (studentId) => {
        return state.students.find((student) => student.id === studentId);
      };
    },
    isCreating: (state) => state.isCreating,
    isUpdating: (state) => state.isCreating
  }
});

export default store;
