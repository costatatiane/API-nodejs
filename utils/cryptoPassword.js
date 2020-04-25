// biblioteca de crypto do próprio node
const crypto = require('crypto');
const { secret } = require('../config/default');

const cryptoPassword = (password) => {
    const hash = crypto.createHmac('sha512', secret);
    hash.update(password);

    return hash.digest('hex');
}

module.exports = cryptoPassword;