import ALLERGIES from "./data/allergies";

const getRandomInt = (maxNum) => {
  return Math.floor(Math.random() * maxNum);
};

export const getRandomAllergy = () => {
  const index = getRandomInt(ALLERGIES.length);
  return ALLERGIES[index];
};
