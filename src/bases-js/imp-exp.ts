import { heroes, type Hero } from "../data/heroes.data.ts";

const getHeroByID = (id: number): Hero => {};

export const getHeroByOwner = (owner: Owner) => {
  const heroesByOwner = heroes.filter((hero) => hero.owner === owner);
  return heroesByOwner;
};
