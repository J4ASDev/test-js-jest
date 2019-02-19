import { isTrue, isFalse, isNull, isUndefined } from '../js/truthness'

describe('Probar valores verdaderos', () => {
  test('Verdadero', () => {
    expect(isTrue()).toBeTruthy();
  });
});

describe('Probar valores falsos', () => {
  test('Falso', () => {
    expect(isFalse()).toBeFalsy();
  });
});

describe('Probar valores nulos', () => {
  test('Nulo', () => {
    expect(isNull()).toBeNull();
  });
});

describe('Probar valores indefinidos', () => {
  test('Indefinido', () => {
    expect(isUndefined()).toBeUndefined();
  });
});

describe('Probar negacion de valores', () => {
  test('No verdadero', () => {
    expect(isTrue()).not.toBeFalsy();
  });

  test('No falso', () => {
    expect(isFalse()).not.toBeTruthy();
  });

  test('No indefinido', () => {
    expect(isNull()).not.toBeUndefined();
  });

  test('No nulo', () => {
    expect(isUndefined()).not.toBeNull();
  });
});