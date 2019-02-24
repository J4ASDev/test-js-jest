import { getDataFromApi} from '../js/getDataFromApi';
import api from '../utils/apis';

describe('Probando Async_Await', () => {
  test('Peticion a el api: Rick and Morty', async () => {
     await getDataFromApi(api.urlRickAndMorty).then(data => {
       expect(data.results.length).toBeGreaterThanOrEqual(0);
     });

     await getDataFromApi(`${api.urlRickAndMorty}1`).then(data => {
       expect(data.name).toEqual('Rick Sanchez');
     });
  });

  test('Peticion a el api: Errores', async () => {
    const peticion = getDataFromApi(`${api.urlError}404`);
    await expect(peticion).rejects.toEqual(Error('Request failed with status code 404'));
  });

  test('Resolviendo y Rechazando Promesas con Async', async () => {
    await expect(Promise.resolve('Resuelto')).resolves.toBe('Resuelto');
    await expect(Promise.reject('Rechazo')).rejects.toBe('Rechazo');
  });
});