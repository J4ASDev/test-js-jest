import { numbers } from '../js/numbers'

describe('Comparacion de numeros', () => {
  test('Mayor que', () => {
    expect(numbers(2,2)).toBeGreaterThan(3);
  });

  test('Mayor o igual que', () => {
    expect(numbers(3,3)).toBeGreaterThanOrEqual(9);
  });

  test('Menor que', () => {
    expect(numbers(4,4)).toBeLessThan(20);
  });

  test('Menor o igual que', () => {
    expect(numbers(2,3)).toBeLessThanOrEqual(6);
  });

  test('Numeros flotantes', () => {
    expect(numbers(0.3, 0.3)).toBeCloseTo(0.09)
  })
})