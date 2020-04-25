const UsersModel = require('../model/Users');
const usersModel = new UsersModel();

class Auth {
    validate (req, res) {
        const {email, password} = req.body;

        usersModel.getBy(email, password)
            .then((user) => {
                if (user.length <= 0) {
                    return res.status(404).send({message: 'User not found'});
                }
                res.send(user.docs[0].data());
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    }
}

module.exports = Auth;