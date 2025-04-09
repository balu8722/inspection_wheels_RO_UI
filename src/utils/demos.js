import faker from 'faker';

export const randomNum = (min = 0, max = 1000) => {
  return faker.random.number({ min, max });
};
