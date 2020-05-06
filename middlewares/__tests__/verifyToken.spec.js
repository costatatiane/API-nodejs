const verifyToken = require('../verifyToken');

describe('verifyToken', () => {
    it('should return a not null decoded token', () => {
        expect(verifyToken(mockData)).not.toBeNull();
    });
});