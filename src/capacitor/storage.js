// Capacitor Storage: https://capacitorjs.com/docs/apis/storage
import { Plugins } from "@capacitor/core";
const { Storage } = Plugins;

export const setCurrentUser = async (uuid) => {
  await Storage.set({
    key: "currentUser",
    value: JSON.stringify(uuid)
  });
};

export const getCurrentUser = async () => {
  const user = await Storage.get({ key: "currentUser" });

  return user.value;
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
