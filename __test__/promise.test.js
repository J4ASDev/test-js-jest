import { getDataFromApi } from '../js/promise'

describe('Probando promesas', () => {
  test('Peticion a un Api: Rick and Morty', done => {
    const url = 'https://rickandmortyapi.com/api/character/'

    getDataFromApi(url).then(data => {
      expect(data.results.length).toBeGreaterThanOrEqual(0);
      done();
    });
  });

  test('Resolviendo Promesas', () => {
    return expect(Promise.resolve('Hola!')).resolves.toBe('Hola!');
  });

  test('Rechazando Promesas', () => {
    return expect(Promise.reject('Error')).rejects.toBe('Error');
  })
});