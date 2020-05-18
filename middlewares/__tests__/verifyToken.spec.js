const verifyToken = require('../verifyToken');

const mockReq = {
    headers: {
        'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFhRkJnSktMSWUxRWlLUnEwNlFnIiwiaWF0IjoxNTg5ODA1ODkzLCJleHAiOjE1ODk4NDkwOTN9.v-BXqHhyz5vqspUjan_KR9sfFY12noOSu73BSWBsrIM',
    }
};

const nullMockReq = {
    headers: {
        'x-access-token': '',
    }
};

const wrongMockReq = {
    headers: {
        'x-access-token': 'abc',
    }
};

const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    return res;
};

const mockRes = mockResponse();

const mockNext = jest.fn();

describe('verifyToken', () => {
    it('should return a not null decoded token', () => {
        expect(verifyToken(mockReq, mockRes, mockNext)).not.toBeNull();
    });

    it('should return not authorized status code 401', async () => {
        const res = await verifyToken(nullMockReq, mockRes, mockNext);
        expect(res.status).toHaveBeenCalledWith(401);
    });

    it('should return not authorized error message', async () => {
        const res = await verifyToken(nullMockReq, mockRes, mockNext);
        expect(res.send).toHaveBeenCalledWith({
            code: 'not_authorized',
            message: 'Not authorized'
        });
    });
});