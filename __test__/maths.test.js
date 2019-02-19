import { sumar, multiplicar, restar, dividir } from '../js/math'

describe('Calculos matematicos', () =>{
    test('Prueba de sumas', ()=> {
        expect(sumar(1,1)).toBe(2);
    });
    test('Multiplicar ', () => {
        expect(multiplicar(2,2)).toBe(4);
    });
    test('Resta', () => {
        expect(restar(10, 5)).toBe(5);
    });
    test('Dividir', () => {
        expect(dividir(5,2)).toBe(2.5);
    });
});