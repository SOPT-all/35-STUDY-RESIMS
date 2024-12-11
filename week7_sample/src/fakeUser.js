import { faker } from "@faker-js/faker";

const THRESHOLD = 50000;

export const users = Array.from(Array(THRESHOLD), () => {
  return {
    name: faker.name.fullName(),
    background: faker.image.nature(),
  };
});
