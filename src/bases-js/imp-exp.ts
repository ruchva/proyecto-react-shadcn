import { heroes, type Hero, Owner } from "../data/heroes.data.ts";

const getHeroByID = (id: number): Hero | undefined => {
  return heroes.find((hero) => hero.id === id);
};

export const getHeroByOwner = (owner: Owner) => {
  const heroesByOwner = heroes.filter((hero) => hero.owner === owner);
  return heroesByOwner;
};
