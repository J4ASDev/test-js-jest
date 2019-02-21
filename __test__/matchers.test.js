describe('Comparadores de igualdad', () => {
  const user = {
    name: 'Jonathan',
    lastname: 'Araujo'
  }

  const user_equal = {
    name: 'Jonathan',
    lastname: 'Araujo'
  }

  const user_no_two = {
    name: 'Andres',
    lastname: 'Salas'
  }

  test('Igualdad de datos', () => {
    expect(user).toEqual(user_equal);
  });

  test('No igualdad de datos', () => {
    expect(user).not.toEqual(user_no_two);
  });
})