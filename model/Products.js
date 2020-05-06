const BaseModel = require('./BaseModel');

class Products extends BaseModel{
    constructor() {
        super();
    }

    get(id) {
        return this.db
            .collection('products')
            .doc(id)
            .get();
    }

    create(product) {
        return this.db
            .collection('products')
            .add(product);
    }

    update(id, product) {
        return this.db
            .collection('products')
            .doc(id)
            .update(product);
    }

    delete(id) {
        return this.db
            .collection('products')
            .doc(id)
            .delete();
    }
}

module.exports = Products;