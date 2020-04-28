const cryptoPassword = require('../cryptoPassword');

const mockData = 'abc';
const encryptedMockData = '86fd74ea48beb984592e627964ac291b726667f393e123866686f146fd3a03d97a38b2d3f0295863218b519162fe323bd59908c18105284692cd2df3087b1fcd';

// começar as rotinas de teste
describe('cryptoPassword', () => {
    // testar se a cripto que retorna não é nula
    it('should return a not null encrypted password', () => {
        expect(cryptoPassword(mockData)).not.toBeNull();
    });
    
    // criar criptografia para a mock que usamos
    // it('get encrypted mock data for this mock data', () => {
    //     console.log(cryptoPassword(mockData));
    // });

    // testar se a cripto que criamos acima funciona com o mesmo mock que passamos
    it('should return an encrypted password equal to encrypted mock', () => {
        expect(cryptoPassword(mockData)).toEqual(encryptedMockData);
    });
});