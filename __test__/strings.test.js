import { text } from '../js/strings'

describe('Comprobar cadenas de texto', () => {
  test('Contine la palabra?', () => {
    expect(text).toMatch('gran');
  });

  test('No contine la palabra?', () => {
    expect(text).not.toMatch('hermoso');
  });

  test('Longitud de la oracion', () => {
    expect(text).toHaveLength(18);
  })
});