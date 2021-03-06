import { getDataFromApi } from '../js/getDataFromApi';
import api from '../utils/apis'

describe('Probando promesas', () => {
  test('Peticion a un Api: Rick and Morty', done => {

    getDataFromApi(api.urlRickAndMorty).then(data => {
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