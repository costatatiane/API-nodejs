const createToken = require('../createToken');

const mockData = {
    id: 1,
}

// começar as rotinas de teste
describe('createToken', () => {
    // no createToken tem dois cenários a serem testados: quando passa o segundo parâmetros e quando não passa
    it('should return token with default expires', () => {
        expect(createToken(mockData)).not.toBeNull();
    });

    it('should return token with param expires', () => {
        expect(createToken(mockData, '24h')).not.toBeNull();
    });

});