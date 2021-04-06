import { createStore } from "vuex";
// import { v4 as uuidv4 } from "uuid";
import { getCurrentUser, setCurrentUser } from "../capacitor/storage.js";

import { firestore } from "../firebase/firebase.utils";
import Student from "../models/student";

// import STUDENTS from "../data/students";
import { getRandomAllergy } from "../helpers";

const store = createStore({
  state: {
    currentUser: null,
    students: [],
    isCreating: false,
    isUpdating: false,
    flash: {
      type: null,
      message: null
    }
  },
  mutations: {
    createStudent(state, studentData) {
      // uuidv4 alternative
      const newStudentID = `uuid${state.students.length + 1}`;

      const newStudent = {
        id: newStudentID,
        name: studentData.name,
        age: studentData.age,
        grade: studentData.grade,
        imageUrl: studentData.imageUrl,
        bio: studentData.bio,
        allergies: [getRandomAllergy(), getRandomAllergy()],
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      };

      state.students.unshift(newStudent);

      state.flash = { type: "success", message: `${newStudent.name} created.` };
    },
    editStudent(state, studentData) {
      const updatedStudentData = {
        id: studentData.id,
        name: studentData.name,
        age: studentData.age,
        grade: studentData.grade,
        imageUrl: studentData.imageUrl,
        bio: studentData.bio,
        updatedAt: new Date().toDateString()
      };

      // Replace existing key values with updated values
      let indexOfStudent = state.students.findIndex(
        (student) => student.id === studentData.id
      );
      Object.assign(state.students[indexOfStudent], updatedStudentData);

      state.flash = {
        type: "success",
        message: `${state.students[indexOfStudent].name} updated.`
      };
    },
    setStudents(state, newStudents) {
      state.students = newStudents;
    },
    setCurrentUser(state, userData) {
      state.currentUser = userData;
      setCurrentUser(userData); // Capacitor Storage
    },
    clearFlash(state) {
      state.flash = { type: null, message: null };
    },
    setIsCreating(state, isCreating) {
      state.isCreating = isCreating;
    },
    setIsUpdating(state, isUpdating) {
      state.isUpdating = isUpdating;
    }
  },
  actions: {
    signUp(context, userData) {
      context.commit("createUser", userData);
    },
    createStudent(context, studentData) {
      /* 
        try {
          const response = await axios.post(`${BASE_URL}/students/${studentData.id}`, studentData);
          const data = await response.json();
          console.log(data);
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
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      */
      context.commit("editStudent", studentData);
    },
    createUser(context, userData) {
      context.commit("setCurrentUser", userData);
    },
    async setStudents(context) {
      try {
        // Get a reference to the students table/collection
        const studentsRef = await firestore.collection("students");
        // Get the snapshot of the reference with .get()
        const studentsSnapshot = await studentsRef.get();
        // Each doc relates to a document in the students table in firestore
        // call .data() to get fields (id, name, etc...)
        const newStudents = studentsSnapshot.docs.map((doc) => doc.data());

        context.commit("setStudents", newStudents);
      } catch (err) {
        alert(err.message);
      }
    },
    clearFlash(context) {
      context.commit("clearFlash");
    }
  },
  getters: {
    students(state) {
      return state.students.map((studentData) => new Student(studentData));
    },
    student(state) {
      return (studentId) => {
        const studentData = state.students.find((student) => student.id === studentId);
        return new Student(studentData);
      };
    },
    flash: (state) => state.flash,
    isCreating: (state) => state.isCreating,
    isUpdating: (state) => state.isCreating,
    currentUser: () => getCurrentUser() // Capacitor Storage
  }
});

export default store;
