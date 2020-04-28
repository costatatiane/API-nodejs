const supertest = require('supertest');
const app = require('../../server');

jest.mock('../../utils/createToken', () => () => 'abc')

describe('/POST auth', () => {
    it('should be response with token', (done) => {
        supertest(app)
            .post('/auth')
            .send({ email: 'teste@gmail.com', password: '123456' })
            .set('Accept', 'application/json')
            .end((err, res) => {
                expect(res.statusCode).toEqual(200);
                expect(res.body.token).toEqual('abc')

                // parâmetro pra quando é uma função assíncrona, confirmar a conclusão do tese
                done();
            });
    });

    it('should not be a valid user', (done) => {
        supertest(app)
            .post('/auth')
            .send({ email: 'tatiane@gmail.com', password: 'abcdef' })
            .set('Accept', 'application/json')
            .end((err, res) => {
                expect(res.statusCode).toEqual(401);
                expect(res.body).toEqual({ 
                    code: 'not_found',
                    message: 'User not found'
                });
                done();
            });
    });

    it('should not be a valid request', (done) => {
        supertest(app)
            .post('/auth')
            .send()
            .set('Accept', 'application/json')
            .end((err, res) => {
                expect(res.statusCode).toEqual(400);
                expect(res.body).toEqual({ 
                    code: 'bad_request',
                    message: 'Bad Request'
                });
                done();
            });
    });
});