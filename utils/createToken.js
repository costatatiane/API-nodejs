const jwt = require('jsonwebtoken');
const { secret } = require('../config/default');

const createToken = (data, expiresIn = '2h') => {
    return jwt.sign (data, secret, { expiresIn });
};

module.exports = createToken;