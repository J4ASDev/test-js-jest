import { getCharacter } from '../js/snapshot';
import rick from '../utils/apis';

describe('Snapshots', () => {
  test('Comparando con datos locales', () => {
    expect(getCharacter(rick)).toMatchSnapshot();
  });

  test('Tenemos una exepcion dentro del Codigo', () => {
    const user = {
      id: Math.floor(Math.random() * 20),
      name: "Jonathan Araujo"
    };

    expect(user).toMatchSnapshot({
      id: expect.any(Number)
    });
  });
});

// jest -u: Update data.
