import { callBackHell } from '../js/callback'

describe('Probando un callback', () => {
  test('Callback', done => {
    function otherCallback (data) {
      expect(data).toBe('Hola Javascripters');
      done();
    }

    callBackHell(otherCallback);
  });
});