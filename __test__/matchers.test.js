describe('Comparadores de igualdad', () => {
  const user = {
    name: 'Jonathan',
    lastname: 'Araujo'
  }

  const user_two = {
    name: 'Andres',
    lastname: 'Salas'
  }

  test('Igualdad de datos', () => {
    expect(user).toEqual(user_two);
  });

  test('No igualdad de datos', () => {
    expect(user).not.toEqual(user_two);
  });
})