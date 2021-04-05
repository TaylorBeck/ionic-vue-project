// Capacitor Storage: https://capacitorjs.com/docs/apis/storage
import { Plugins } from "@capacitor/core";
const { Storage } = Plugins;

export const setCurrentUser = async (userData) => {
  await Storage.set({
    key: "currentUser",
    value: JSON.stringify(userData)
  });
};

export const getCurrentUser = async () => {
  const currentUserObj = await Storage.get({ key: "currentUser" });
  const user = await JSON.parse(currentUserObj.value);

  return user;
};

export const createUser = async (newUser) => {
  const usersObj = await Storage.get({ key: "users" });
  const users = await JSON.parse(usersObj.value);

  users.push(newUser);

  await Storage.set({
    key: "users",
    value: JSON.stringify(users)
  });
};

export const getUsers = async () => {
  await Storage.get({ key: "users" });
};

export const clearStorage = async () => {
  await Storage.clear();
};
