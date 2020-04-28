const UsersModel = require('../model/Users');
const usersModel = new UsersModel();

const createToken = require('../utils/createToken');
const cryptoPassword = require('../utils/cryptoPassword');

class Auth {
    validate(req, res) {
        const { email, password } = req.body;

        if (!email || !password) {
            return res
                .status(400)
                .send({
                    code: 'bad_request',
                    message: 'Bad Request'
                });
        }
        
        const conditions = [
            { field: 'email', operator: '==', value: email },
            { field: 'password', operator: '==', value: cryptoPassword(password) }
        ];

        usersModel.getBy(conditions)
            .then(users => {
                if (users.docs.length === 0) {
                    return res
                        .status(401)
                        .send({
                            code: 'not_found',
                            message: 'User not found'
                        });
                }
                res.send({ token: createToken({ id: users.docs[0].id }) });
            })
            .catch(error => res.status(500).send(error));
    }
}

module.exports = Auth;