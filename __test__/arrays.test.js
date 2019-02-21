import { arrayFruits, arrayColors } from '../js/arrays'

describe('Comprobar que existe un elemento', () => {
  test('Tiene una banana?', () => {
    expect(arrayFruits()).toContain('banana');
  });

  test('No tiene una platano?', () => {
    expect(arrayFruits()).not.toContain('platano');
  });
  
  test('Cantidad de elementos', () => {
    expect(arrayFruits()).toHaveLength(5);
  });
});
