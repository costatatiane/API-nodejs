const BaseModel = require('./BaseModel');

class Users extends BaseModel{
    constructor() {
        super();
    }

    get(id) {
        return this.db
            .collection('users')
            .doc(id)
            .get();
    }

    getBy(email, password) {
        return this.db
            .collection('users')
            .where('email', '==', email)
            .where('password', '==', password)
            .get();
    }
}

module.exports = Users;