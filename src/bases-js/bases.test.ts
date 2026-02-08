import { returnArrayFn, useState } from './array-destructuring';
import { getHeroByOwner } from './imp-exp';

describe('Bases tests', () => {
  test('returnArrayFn should return the correct tuple values', () => {
    const [letters, numbers] = returnArrayFn();
    expect(letters).toBe('abc');
    expect(numbers).toBe(123);
  });

  test('useState (custom) should initialize with the provided value', () => {
    const testValue = 'Goku';
    const [name] = useState(testValue);
    expect(name).toBe(testValue);
  });

  test('getHeroByOwner should return heroes for a specific owner', () => {
    const dcHeroes = getHeroByOwner('DC');
    expect(dcHeroes.length).toBe(4);
    expect(dcHeroes.every((hero) => hero.owner === 'DC')).toBe(true);

    const marvelHeroes = getHeroByOwner('Marvel');
    expect(marvelHeroes.length).toBe(2);
    expect(marvelHeroes.every((hero) => hero.owner === 'Marvel')).toBe(true);
  });
});