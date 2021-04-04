import { createStore } from "vuex";
import { v4 as uuidv4 } from "uuid";
import VuexPersistence from "vuex-persist";

import STUDENTS from "../data/students";
import { getRandomAllergy } from "../helpers";

const store = createStore({
  state() {
    return {
      students: STUDENTS,
      isCreating: false,
      isUpdating: false
    };
  },
  plugins: [new VuexPersistence().plugin],
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

      let index = state.students.findIndex(
        (student) => student.id === studentData.id
      );
      // Replace existing key values with updated values
      Object.assign(state.students[index], updatedStudentData);
    },
    setIsCreating(state, isCreating) {
      state.isCreating = isCreating;
    },
    setIsUpdating(state, isUpdating) {
      state.isUpdating = isUpdating;
    }
  },
  actions: {
    createStudent(context, studentData) {
      /* 
        try {
          const response = await axios.post(`${BASE_URL}/students/${studentData.id}`, studentData);
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      */
      context.commit("createStudent", studentData);
    },
    editStudent(context, studentData) {
      /* 
        try {
          const response = await axios.put(`${BASE_URL}/students/${studentData.id}`, studentData);
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      */
      context.commit("editStudent", studentData);
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
