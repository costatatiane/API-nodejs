const UsersModel = require('../model/Users');
const usersModel = new UsersModel();

class Users {
    get (req, res) {
        const {id} = req.params;

        usersModel.get(id)
            .then((user) => {
                if (!user.exists) {
                    res.status(404).send({message: 'User not found'});
                }
                res.json(user.data());
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    }

    create (req, res) {
        usersModel.create(req.body)
            .then(user => {
                res.send({
                    ...req.body,
                    id: user.id,
                });
            })
            .catch(error => res.status(500).send(error));
    }

    delete (req, res) {
        const {id} = req.params;

        usersModel.delete(id)
            .then(res.status(200).send({message: 'Deleted user'}))
            .catch(error => res.status(500).send(error));
    }
}

module.exports = Users;