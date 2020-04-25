const createToken = require('../utils/createToken');
const UsersModel = require('../model/Users');
const usersModel = new UsersModel();

class Auth {
    validate(req, res) {
        const { email, password } = req.body;
        
        const conditions = [
            { field: 'email', operator: '==', value: email },
            { field: 'password', operator: '==', value: password }
        ];

        usersModel.getBy(conditions)
            .then(users => {
                if(users.docs.length === 0) {
                    return response
                        .status(401)
                        .send({ 
                            code: 'not_found',
                            message: 'User not found'
                        });
                }
                res.send({token: createToken({ id: users.docs[0].id})});
            })
            .catch(error => res.status(500).send(error));
    }
}

module.exports = Auth;