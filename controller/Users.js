class Users {
    get (req, res) {
        res.send(`Eu recebi o parâmetro ${req.params.id}`);
    }
}

module.exports = Users;