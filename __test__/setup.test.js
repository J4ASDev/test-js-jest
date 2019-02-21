// Despues de cada prueba
afterEach(() => console.log('Despues de cada prueba'));
afterAll(() => console.log('Despues de todas las pruebas'));

// Antes de cada prueba
beforeEach(() => console.log('Antes de cada prueba'));
beforeAll(() => console.log('Antes de todas las pruebas'));

describe('Preparar antes de ejecutar', () => {
  test('Verdadero o falso', () => {
    expect(true).toBeTruthy();
  });
})